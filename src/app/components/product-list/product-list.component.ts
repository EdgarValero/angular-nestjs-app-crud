import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/Product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res;
        },
        error => console.log(error)
      );
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          this.getProducts();
        },
        error => console.log(error)
      );
  }
}
