import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './util/not-found/not-found.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductDetailesComponent } from './components/shopping-cart/product-list/product-detailes/product-detailes.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: ShoppingCartComponent
        
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'shopping',
        component: ShoppingCartComponent
      },
      {
        path: 'product-details/:id',
        component: ProductDetailesComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  // {
  //   path: '**', pathMatch: 'full', redirectTo:''
  // }
  {
    path: '**', 
    component: NotFoundComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
