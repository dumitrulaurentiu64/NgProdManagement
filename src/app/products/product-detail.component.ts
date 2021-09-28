import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct =
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };



  constructor(private route: ActivatedRoute,
              private router: Router) { }

  onBack(): void {
    this.router.navigate(['/products']);    // activating a route with code
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));   // this gets the parameter passed in the route
    this.pageTitle += `: ${id}`;
  }

}
