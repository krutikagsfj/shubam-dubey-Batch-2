import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  //we will call this method from brand-component.ts file
   
  getBrandDetails(){
    return this.http.get('assets/productBrands.json')
  }
}
