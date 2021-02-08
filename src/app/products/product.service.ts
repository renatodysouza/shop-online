/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // private urlProducts = 'https://5ee744ce52bb0500161fd6e4.mockapi.io/products';
  private urlProducts = 'https://fakestoreapi.com/products';

  products$ = this.http.get(this.urlProducts);

  constructor(private http: HttpClient) { }

}
