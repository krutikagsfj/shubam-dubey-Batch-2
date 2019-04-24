import { Component, OnInit } from '@angular/core';

// import { myService } from '../my-Service.service';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {
  brandData;
  constructor(private bd:MyServiceService) {
   }


  ngOnInit() {
    // calling this method from my-service.tc file which will
    // return the data of json file
    this.bd.getBrandDetails().subscribe(res=>
      {
        this.brandData=res;
      })
  }


  

}
