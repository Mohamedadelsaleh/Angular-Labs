import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: '',component: BodyComponent},
  {path: 'Products',
          component: ProductComponent,
          children:[
            {path: 'product_with_discount',component:ProductsWithDiscountComponent},
            {path: 'product_without_discount',component:ProductsWithoutDiscountComponent}
          ]},
  {path: 'Users',component: UsersComponent},
  {path: 'Posts',component: PostsComponent},
  {path: 'SignUp',component: SignupComponent},
  {path: 'Login',component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
