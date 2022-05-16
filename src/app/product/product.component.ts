import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {IProduct} from '../Shared Classes and types/IProduct'
import {ICategory} from '../Shared Classes and types/ICatrgory'
import {DiscountOffers} from '../Shared Classes and types/DiscountOffer'
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute,private productService: ProductServiceService) {
    this.discount=DiscountOffers.fifteenDiscount;
    this.storeLogo='../../assets/logo.png';
    this.storeName="Image From Header";
    this.categoryList=[{
      ID:1,
      Name:"Mobiles"
    },{
      ID:2,
      Name:"Tablets"
    },
  {
    ID:3,
    Name:"Laptops"
  }];

    this.clientName = 'Mohamed Adel';
    this.isPurshased= true;
  }

  ngOnInit(): void {
  }

  discount:DiscountOffers;
  storeName:String;
  storeLogo:String;
  productList:Array<IProduct>=[];
  categoryList:Array<ICategory>;
  clientName:String;
  isPurshased:Boolean;


  ClientName:String="";

  // hide():any{
  //   this.isPurshased=false;
  // }


  @Output() childEvent = new EventEmitter();

  renderValues(){
    this.productList = this.productService.GetAllProducts();
    this.isPurshased=!this.isPurshased;
    // this.childEvent.emit(this.productList);
  }

  // sendData(){
  //   this.childEvent.emit(this.renderValues);
  // }
  product_with_discount(){
    this.router.navigate(['product_with_discount'],{relativeTo: this.activatedRoute})
    this.productList=this.productService.GetAllProducts().filter((item) => item.ID !== 2);
  }

  product_without_discount(){
    this.router.navigate(['product_without_discount'],{relativeTo: this.activatedRoute})
    console.log("pressed");
    this.productList=this.productService.GetAllProducts().filter((item) => item.ID === 2 );

  }
}
