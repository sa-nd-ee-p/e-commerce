import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/assets/product';
import { ProductService } from '../services/product.service copy';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  p: number = 1;
  products!: Product[];
  openProductModal: boolean = false;
  openDeleteModal: boolean = false;
  productForm!: FormGroup;
  title!: string;
  addProductFlag: boolean = false;
  displayMessage!: any;
  productIdToBeDeleted!: number;
  productToBeUpdated!: Product;
  openMessageModal!:boolean;
  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      rating: ['', Validators.required]
    })
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      }
    )
  }

  updateProduct(product: Product) {
    this.productToBeUpdated=product;
    this.openProductModal = true;
    this.addProductFlag = false;
    this.title = 'Update Product';
    this.setFormData(product);
  }

  deleteProduct(product: Product) {

    this.openDeleteModal = true;
    this.productIdToBeDeleted=product.id
    
  }
  deleteProductFinal(){
    this.closeDeleteModal();
    this.productService.deleteProduct(this.productIdToBeDeleted).subscribe(
      (data) => {
        this.openMessageModal=true;
        this.displayMessage = data;
      },
      error=>{
        this.openMessageModal=true;
        this.displayMessage=error;
      }

    )
  }

  addProduct() {
    this.productForm.reset();
    this.openProductModal = true;
    this.addProductFlag = true;
    this.title = 'Add Product';
  }

  closeProductModal() {
    this.openProductModal = false;
  }
  closeDeleteModal(){
    this.openDeleteModal=false;
  }
  closeMessageModal(){
    this.openMessageModal=false;
    this.getAllProducts();
  }

  onFormSubmit() {
    this.closeProductModal();
    if (this.addProductFlag) {
      const formData = {
        productName: this.productForm.value.name,
        rating: this.productForm.value.rating,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        category: this.productForm.value.category,
      }
      this.productService.addProdcut(formData).subscribe(
        (data) => {
          this.openMessageModal=true;
          this.displayMessage = data;
        },
        error=>{
          this.openMessageModal=true;
          this.displayMessage=error;
        }

      )
    }
    else {
      const formData:Product = {
        productName: this.productForm.value.name,
        rating: this.productForm.value.rating,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        category: this.productForm.value.category,
        id: this.productToBeUpdated.id,
      }
      this.productService.updateProduct(formData).subscribe(
        (data) => {
          this.openMessageModal=true;
          this.displayMessage = data;
         
        },
        error=>{
          this.openMessageModal=true;
          this.displayMessage=error;
        }
      )
    }
  }

  setFormData(product: Product) {
    if(!this.addProductFlag){
      this.productForm.patchValue({
        name: product.productName,
        rating: product.rating,
        category: product.category,
        description: product.description,
        price: product.price
      })
    }
  }
}
