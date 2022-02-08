export interface Product {
    id: number;
    name: string;
    photo: string;
    price: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
}