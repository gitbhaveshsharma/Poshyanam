import type { IconKey, Product } from "@/lib/types";

export const brand = {
  name: "Poshyanam",
  shortName: "P",
  tagline: "Complete Nourishment",
  footerText: "Complete nourishment for every age. Made with love, backed by science.",
  navigation: [
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Nutrition", href: "#nutrition" },
    { label: "Story", href: "#story" },
  ],
};

export const hero = {
  eyebrow: "WHO-Aligned Nutrition",
  title: "Complete Nourishment in Every Bite",
  description:
    "India's first fortified nut-based nutrition spread for children. Made from real cashews, almonds, pistachios, and walnuts, naturally sweetened with dates and figs. No refined sugar. No preservatives. Just pure nourishment.",
  primaryAction: "Shop Now",
  secondaryAction: "Learn More",
};

export const featureHighlights: Array<{ label: string; icon: IconKey }> = [
  { label: "Natural Ingredients", icon: "natural" },
  { label: "No Preservatives", icon: "preservativeFree" },
  { label: "WHO Certified", icon: "certified" },
  { label: "Fortified Nutrition", icon: "fortified" },
];

export const products: Product[] = [
  {
    id: "classic-spread",
    name: "Classic Spread",
    shortLabel: "Classic",
    image: "/poshyanam-natural-peanut-butter-300g-front.png",
    imageAlt: "Poshyanam Natural Peanut Butter 300g front jar",
    badge: "Bestseller",
    description: "Perfect blend of nutritious nuts with dates and figs.",
    weight: "300g",
    tags: ["High Protein", "No Sugar", "Natural"],
    price: 349,
    originalPrice: 499,
  },
  {
    id: "deluxe-blend",
    name: "Deluxe Blend",
    shortLabel: "Deluxe",
    image: "/poshyanam-hero-natural-nutrition-spread.png",
    imageAlt: "Poshyanam natural nutrition spread jar",
    badge: "Premium",
    description: "Premium mix with extra pistachios for enhanced flavor.",
    weight: "400g",
    tags: ["Rich Flavor", "Fortified", "Creamy"],
    price: 549,
    originalPrice: 799,
  },
  {
    id: "bundle-pack",
    name: "Bundle Pack",
    shortLabel: "Bundle",
    image: "/poshyanam-natural-peanut-butter-bundle-3x300g.png",
    imageAlt: "Poshyanam Natural Peanut Butter bundle pack with three jars",
    badge: "Save 40%",
    description: "Get three jars for the whole family.",
    weight: "900g Total",
    tags: ["Value Pack", "Family Size", "Save More"],
    price: 899,
    originalPrice: 1497,
  },
];

export const whyUs: Array<{
  title: string;
  description: string;
  icon: IconKey;
}> = [
  {
    title: "Nutrient Dense",
    description:
      "Packed with protein, healthy fats, and micronutrients essential for growing children.",
    icon: "nutrientDense",
  },
  {
    title: "All Natural",
    description:
      "Made from real nuts, dates, and figs. No artificial colors, flavors, or preservatives.",
    icon: "allNatural",
  },
  {
    title: "Supports Growth",
    description:
      "Fortified with essential vitamins and minerals for cognitive and physical development.",
    icon: "growth",
  },
  {
    title: "Safety First",
    description:
      "Tested for purity and quality. Made in a food-grade facility with strict hygiene standards.",
    icon: "safety",
  },
];

export const nutritionFacts = [
  { value: "25g", label: "Protein per Jar" },
  { value: "0g", label: "Refined Sugar" },
  { value: "15+", label: "Essential Nutrients" },
  { value: "100%", label: "Natural Ingredients" },
];

export const story = {
  statement:
    "We created Poshyanam because we believe every child deserves complete nutrition without compromise.",
  paragraphs: [
    "Born from a mother's quest to find the perfect nutrition for her children, Poshyanam combines ancient Ayurvedic wisdom with modern nutrition science. We use only the finest natural ingredients, fortified with essential vitamins and minerals that growing children need.",
    "From our family to yours, Poshyanam is a promise of pure nourishment, crafted with love and backed by science.",
  ],
  signature: "The Poshyanam Family",
};

export const footerGroups = [
  {
    title: "Products",
    items: [
      { label: "Classic Spread", href: "#products" },
      { label: "Deluxe Blend", href: "#products" },
      { label: "Bundle Pack", href: "#products" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Our Story", href: "#story" },
      { label: "Nutrition", href: "#nutrition" },
      { label: "Why Us", href: "#why-us" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "hello@poshyanam.com" },
      { label: "+91 88602 88243" },
      { label: "Delhi, India" },
    ],
  },
];
