import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HeaderComponent } from './home/components/shared/header/header.component';
import { FooterComponent } from './home/components/shared/footer/footer.component';
import { NavComponent } from './home/components/shared/nav/nav.component';
import { ShoppingCartComponent } from './home/components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './home/components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './home/components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './home/components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './home/components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './home/components/shopping-cart/product-list/product-item/product-item.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule,
ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
