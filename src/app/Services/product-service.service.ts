import { Injectable } from '@angular/core';
import {IProduct} from '../Shared Classes and types/IProduct'


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {



  constructor() {
    this.productList= [{
      ID:1,
      Name:"Product One",
      Price:30,
      Quantity:2,
      img:"../../assets/1.jpg"
    },
    {
      ID:2,
      Name:"Product Two",
      Price:130,
      Quantity:5,
      img:"../../assets/1.jpg"
    },
    {
      ID:3,
      Name:"Product Three",
      Price:50,
      Quantity:9,
      img:"../../assets/1.jpg"
    },
  ];

  }

  productList:Array<IProduct>;

  GetAllProducts(){
    return this.productList;
  }

  GetProductById(prdId:number){
    const id:any = this.productList.find(element => element.ID === prdId)
    if (id === 'undefined'){
      return null;
    }else{
      return id;
    }
  }
}
