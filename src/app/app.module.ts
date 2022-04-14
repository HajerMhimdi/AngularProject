import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './components/product-add/product-add.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsNavBarComponent } from './components/products/components/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './components/products/components/products-list/products-list.component';
import { ProductItemComponent } from './components/products/components/products-list/components/product-item/product-item.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
MatGridListModule,
CommonModule,
MatDialogModule,
LayoutModule,
MatListModule ,
MatCardModule,
ScrollingModule,
MatFormFieldModule,
MatInputModule,
FormsModule, ReactiveFormsModule,
FlexLayoutModule ,
HttpClientModule,
MatCheckboxModule,
ReactiveFormsModule


  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
