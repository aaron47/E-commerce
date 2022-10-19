interface Row {
  [id: number]: number;
}

export const ROWS_HEIGHT: Row = {
  1: 400,
  3: 335,
  4: 350,
};

export interface CartItem {
  id: number;
  product: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
