import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';  // added OnInit here
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List Second Version';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;
    
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];
    private _listFilter: string = '';
    
    constructor(private productService: ProductService) {}

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this.filteredProducts = this.performFilter(value);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage
    }

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = products;
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy))
    }
}