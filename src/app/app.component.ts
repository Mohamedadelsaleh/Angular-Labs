import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductServiceService } from './Services/product-service.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day-One';
  // @ViewChild (ProductComponent) child:ProductComponent = new ProductComponent(new ProductServiceService())

    // ngAfterViewInit(){
    //   this.child.renderValues();
    // }
}
