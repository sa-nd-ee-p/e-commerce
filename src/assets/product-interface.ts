import { Observable } from "rxjs";
import { Product } from "./product";

export interface ProductInterfaceService{
    // returns all products
    getAllProducts(): Observable<Product[]>;

    // returns the Id of the newly added product
    addProdcut(newTodo: Product): Observable<number>;

    // returns message when Product is updated
    updateProduct(todoToUpdate: Product): Observable<string>;

    // returns  message when Product is deleted
    deleteProduct(todoId: number): Observable<string>; 
}