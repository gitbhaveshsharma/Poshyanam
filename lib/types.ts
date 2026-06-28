export type Product = {
  id: string;
  name: string;
  shortLabel: string;
  image: string;
  imageAlt: string;
  badge: string;
  description: string;
  weight: string;
  tags: string[];
  price: number;
  originalPrice: number;
  availability?: "available" | "testing";
  unavailableLabel?: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type IconKey =
  | "natural"
  | "preservativeFree"
  | "certified"
  | "fortified"
  | "nutrientDense"
  | "allNatural"
  | "growth"
  | "safety";
