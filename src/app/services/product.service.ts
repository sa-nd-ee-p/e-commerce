import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from 'src/assets/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('/shopBridgeApi/product');
  }

 
  addProdcut(product: Product): Observable<number>{
    return this.httpClient.post<number>('/shopBridgeApi/product', product);
  }


 
  updateProduct(product: Product): Observable<string>{
    return this.httpClient.put<string>('/shopBridgeApi/product', product);
  }

  
  deleteProduct(productId: number): Observable<string>{
    return this.httpClient.delete<string>('/shopBridgeApi/product/'+ productId);
  } 
}
