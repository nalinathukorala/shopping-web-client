import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent implements OnInit {

  // productList: Product[] = []
  // product: Product;
  item: any = Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getSingleProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.item = product;
      console.log(this.item);
    }, error => {
      console.log(error);
    });
  }

}
