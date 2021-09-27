import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from './product';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root' 
})

export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(               // the Obs. sends data through this pipe
            tap(data => console.log('All', JSON.stringify(data))),            // we can call different methods inside the pipe for logging and error handling
            catchError(this.handleError)                                      // like tap and catchError
        )
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if ( err.error instanceof ErrorEvent ) {
            errorMessage = 'An error occurred: ${err.error.message}';
        } else {
            errorMessage = `Server return code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}