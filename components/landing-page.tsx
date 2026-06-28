"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  Leaf,
  Menu,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Star,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  brand,
  featureHighlights,
  footerGroups,
  hero,
  nutritionFacts,
  products,
  story,
  whyUs,
} from "@/lib/content";
import type { CartItem, Product } from "@/lib/types";

const storageKey = "poshyanam-cart";

const iconMap = {
  natural: Leaf,
  preservativeFree: ShieldCheck,
  certified: Check,
  fortified: PackageCheck,
  nutrientDense: Star,
  allNatural: Leaf,
  growth: Sprout,
  safety: ShieldCheck,
};

export function LandingPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasLoadedCart, setHasLoadedCart] = useState(false);

  useEffect(() => {
    const loadStoredCart = () => {
      const storedCart = window.localStorage.getItem(storageKey);
      if (storedCart) {
        try {
          setCartItems(JSON.parse(storedCart) as CartItem[]);
        } catch {
          window.localStorage.removeItem(storageKey);
        }
      }
      setHasLoadedCart(true);
    };

    window.requestAnimationFrame(loadStoredCart);
  }, []);

  useEffect(() => {
    if (!hasLoadedCart) {
      return;
    }
    window.localStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems, hasLoadedCart]);

  useEffect(() => {
    document.body.classList.toggle("cart-open", isCartOpen);
    return () => document.body.classList.remove("cart-open");
  }, [isCartOpen]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        const product = products.find((entry) => entry.id === item.productId);
        return sum + (product?.price ?? 0) * item.quantity;
      }, 0),
    [cartItems],
  );

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productId === product.id,
      );
      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentItems, { productId: product.id, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((currentItems) =>
      quantity <= 0
        ? currentItems.filter((item) => item.productId !== productId)
        : currentItems.map((item) =>
            item.productId === productId ? { ...item, quantity } : item,
          ),
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId),
    );
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label={`${brand.name} home`}>
            <span className="brand-mark">{brand.shortName}</span>
            {brand.name}
          </a>
          <div className="nav-links" aria-label="Page sections">
            {brand.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="cart-button"
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open cart with ${cartCount} items`}
          >
            <ShoppingBag aria-hidden="true" size={19} />
            <span>Cart</span>
            <strong className="cart-count">{cartCount}</strong>
          </button>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          {brand.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id="hero-title">{hero.title}</h1>
              <p className="hero-copy">{hero.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">
                  {hero.primaryAction}
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-secondary" href="#story">
                  {hero.secondaryAction}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="products">
          <div className="section-inner">
            <div className="feature-strip" aria-label="Product assurances">
              {featureHighlights.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div className="feature-pill" key={feature.label}>
                    <Icon aria-hidden="true" size={20} />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="section-heading">
              <div>
                <p className="eyebrow">Our Products</p>
                <h2>Nutritious Goodness Designed for Kids</h2>
              </div>
              <p>
                Each jar is carefully crafted with the finest ingredients, no
                compromise on quality or nutrition.
              </p>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-media">
                    <span className="badge">{product.badge}</span>
                    <Image
                      alt={product.imageAlt}
                      className="product-image"
                      height={300}
                      priority={product.id === "classic-spread"}
                      sizes="(max-width: 980px) 70vw, 300px"
                      src={product.image}
                      width={300}
                    />
                  </div>
                  <div className="product-body">
                    <h3>{product.name}</h3>
                    <p className="product-description">
                      {product.description}
                    </p>
                    <div className="weight">{product.weight}</div>
                    <div className="tag-list">
                      {product.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="product-footer">
                      <div className="price" aria-label="Product price">
                        <span className="sale-price">
                          {formatCurrency(product.price)}
                        </span>
                        <span className="mrp">
                          {formatCurrency(product.originalPrice)}
                        </span>
                      </div>
                      <button
                        className="button button-primary"
                        type="button"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why-us">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Why Poshyanam</p>
                <h2>The Poshyanam Difference</h2>
              </div>
              <p>
                Every jar is a commitment to your child&apos;s health and
                development.
              </p>
            </div>
            <div className="why-grid">
              {whyUs.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article className="why-item" key={item.title}>
                    <div className="why-icon">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-primary" id="nutrition">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Nutrition Facts</p>
                <h2>Packed with Essential Nutrients</h2>
              </div>
              <p>
                Every spoonful delivers optimal nutrition for your child&apos;s
                growth and development.
              </p>
            </div>
            <div className="nutrition-grid">
              {nutritionFacts.map((fact) => (
                <div className="nutrition-card" key={fact.label}>
                  <span className="nutrition-value">{fact.value}</span>
                  <span className="nutrition-label">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="story">
          <div className="section-inner story-layout">
            <div className="story-panel">
              <strong>{story.statement}</strong>
              <span>{story.signature}</span>
            </div>
            <div className="story-copy">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="signature">{story.signature}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">{brand.shortName}</span>
              {brand.name}
            </a>
            <p>{brand.footerText}</p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="footer-title">{group.title}</div>
              <div className="footer-links">
                {group.items.map((item) =>
                  "href" in item && item.href ? (
                    <a href={item.href} key={item.label}>
                      {item.label}
                    </a>
                  ) : (
                    <span key={item.label}>{item.label}</span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          © 2024 {brand.name}. All rights reserved.
        </div>
      </footer>

      <CartDrawer
        cartItems={cartItems}
        cartTotal={cartTotal}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeItem}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

function CartDrawer({
  cartItems,
  cartTotal,
  isOpen,
  onClose,
  onRemove,
  onUpdateQuantity,
}: {
  cartItems: CartItem[];
  cartTotal: number;
  isOpen: boolean;
  onClose: () => void;
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}) {
  return (
    <>
      <button
        aria-label="Close cart"
        className={`drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
        type="button"
      />
      <aside
        aria-label="Shopping cart"
        aria-modal="true"
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        role="dialog"
      >
        <div className="drawer-header">
          <h2>Your Cart</h2>
          <button
            className="icon-button"
            type="button"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              Your cart is ready for fresh nourishment. Add a product to see it
              here.
            </div>
          ) : (
            cartItems.map((item) => {
              const product = products.find(
                (entry) => entry.id === item.productId,
              );
              if (!product) {
                return null;
              }
              return (
                <div className="cart-line" key={item.productId}>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="cart-thumb-image"
                    height={64}
                    src={product.image}
                    width={64}
                  />
                  <div>
                    <p className="cart-line-title">{product.name}</p>
                    <p className="cart-line-meta">
                      {product.weight} · {formatCurrency(product.price)}
                    </p>
                    <div className="quantity-row">
                      <div
                        className="quantity-controls"
                        aria-label={`Quantity for ${product.name}`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(product.id, item.quantity - 1)
                          }
                          aria-label={`Decrease ${product.name}`}
                        >
                          <Minus aria-hidden="true" size={15} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(product.id, item.quantity + 1)
                          }
                          aria-label={`Increase ${product.name}`}
                        >
                          <Plus aria-hidden="true" size={15} />
                        </button>
                      </div>
                      <button
                        className="remove-button"
                        type="button"
                        onClick={() => onRemove(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="drawer-footer">
          <div className="total-row">
            <span>Total</span>
            <span>{formatCurrency(cartTotal)}</span>
          </div>
          <button className="button button-primary" type="button">
            Checkout
          </button>
          <p className="checkout-note">
            Cart details are saved on this device and stay available after page
            reload.
          </p>
        </div>
      </aside>
    </>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
