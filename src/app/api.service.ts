import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getBookDetail(type: Boolean){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.httpClient.get(
      `http://localhost:3000/books/getBook-detail/${type}`, 
       {headers: headers}
      ).pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Capital not found!' );
           })
        )
    }

    CreateCustomerOrder(value: any){
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Accept', 'application/json');
      return this.httpClient.post(
        `http://localhost:3000/customer/create-customer`, value,
         {headers: headers}
        ).pipe(
             map((data: any) => {
               return data;
             }), catchError( error => {
               return throwError( 'Capital not found!' );
             })
          )
      }
}
