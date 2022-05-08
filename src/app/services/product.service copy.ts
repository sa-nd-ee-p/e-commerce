import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Product } from 'src/assets/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private dummyProducts: Product[] = [
    {
      id: 1,
      productName: 'Iphone',
      rating: 5,
      price: 30000,
      category: 'SmartPhone',
      description: 'abcd'
    },
    {
      id: 2,
      productName: 'Nokia',
      rating: 2,
      price: 10000,
      category: 'SmartPhone',
      description: 'abcd'
    },
    {
      id: 3,
      productName: 'Samsung',
      rating: 4,
      price: 20000,
      category: 'SmartPhone',
      description: 'abcd'
    },
    {
      id: 4,
      productName: 'MI',
      rating: 3,
      price: 7000,
      category: 'SmartPhone',
      description: 'abcd'
    },
    {
      id: 5,
      productName: 'OnePlus',
      rating: 5,
      price: 35000,
      category: 'SmartPhone',
      description: 'abcd'
    },
    {
      id: 6,
      productName: 'LG',
      rating: 5,
      price: 32000,
      category: 'TV',
      description: '3 Years warranty'
    },
    {
      id: 7,
      productName: 'Videocon',
      rating: 4,
      price: 35000,
      category: 'TV',
      description: 'Nice TV in bugdet'
    },
    {
      id: 8,
      productName: 'Himalayan',
      rating: 5,
      price: 500000,
      category: 'Automobile',
      description: 'Most suitable in hilly terrain'
    },
    {
      id: 9,
      productName: 'Mac Book',
      rating: 5,
      price: 95000,
      category: 'Laptops',
      description: 'Finest tech device'
    },
    {
      id: 10,
      productName: 'Denim Ripped',
      rating: 4,
      price: 5000,
      category: 'Clothes',
      description: 'Durable and long lasting.'
    },
    {
      id: 11,
      productName: 'Rolex',
      rating: 5,
      price: 10000,
      category: 'Watch',
      description: 'Most reliable watch ever!'
    },
    {
      id: 12,
      productName: 'Dell',
      rating: 5,
      price: 40000,
      category: 'Laptops',
      description: 'i7 Nex Gen Laptop'
    },
    {
      id: 13,
      productName: 'Honda City',
      rating: 4,
      price: 35000,
      category: 'Automobile',
      description: 'Nice Car'
    }
  ];
  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.dummyProducts)
  }


  addProdcut(product: any): Observable<string> {
    const id = this.dummyProducts.length + 1;
    this.dummyProducts.push({ id, ...product })
    return of('Product added Successfully!');
  }



  updateProduct(product: Product): Observable<string> {
    this.dummyProducts.forEach(x => {
      if (x.id == product.id) {
        const index = this.dummyProducts.indexOf(x);
        this.dummyProducts.splice(index, 1, product)
      }
    })
    this.dummyProducts = [...this.dummyProducts]
    return of('Product Updated Successfully!');
  }


  deleteProduct(productId: number): Observable<string> {
    this.dummyProducts.forEach(x => {
      if (x.id == productId) {
        const index = this.dummyProducts.indexOf(x);
        this.dummyProducts.splice(index, 1)
      }
    })
    this.dummyProducts = [...this.dummyProducts]
    return of('Product deleted successfully!')
  }
}
