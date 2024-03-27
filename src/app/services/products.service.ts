import { Product } from "../products/product.interface";

export class ProductsService{
    products: Product[] = []
    
    addItem(itemToAdd: Product) {
        this.products.push(itemToAdd)
    }

}