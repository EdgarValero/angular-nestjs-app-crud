import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/interfaces/Product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    imageURL: '',
    price: 0
  };

  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.productService.getProduct(id)
        .subscribe(
          res => {
            this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      );
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id, this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

}
