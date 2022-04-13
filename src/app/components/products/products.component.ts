import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError,startWith,map } from 'rxjs/operators';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
//products?:Product[];
//1--products:Product[]|null=null
public products$:Observable<AppDataState<Product[]>> |null=null
readonly DataStateEnum=DataStateEnum;

  constructor(private productsService:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }
/* //1-premier solution
  onGetAllProducts(){
    this.productsService.getAllProducts().subscribe(
      data =>{
      this.products=data;},
      error=>{console.error(error);
      })
      
  }*/

  onGetAllProducts(){
this.products$=this.productsService.getAllProducts().pipe(
  map((data)=>
    {console.log(data);
      return ({dataState:DataStateEnum.LOADED,data:data})}),
  startWith({dataState:DataStateEnum.LOADING}),
  catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
);
}

onGetSelectedProducts(){
  this.products$=this.productsService.getSelectedProducts().pipe(
    map((data)=>
      {console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})}),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  );
}


onGetAvailableProducts(){
  this.products$=this.productsService.getAvailableProducts().pipe(
    map((data)=>
      {console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})}),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  );
}

onSearch(dataForm:any){
  this.products$=this.productsService.searchProducts(dataForm.keyword).pipe(
    map((data)=>
      {console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})}),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  );
}

onSelect(p:Product){
  /*this.products$=this.productsService.select(p).pipe(
    map((data)=>
    {console.log(data);
    return({dataState:DataStateEnum.LOADED,data:data})}),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  );*/

  //y a pas besoin de recharger la page il faut just changer la status de selected c'est tt !!
/*this.productsService.select(p).subscribe(data=>{
  this.onGetAllProducts();*/

  this.productsService.select(p).subscribe(data=>{
    p.selected=data.selected;
})
}

onDelete(p){
  let v = confirm("Are you sure you want to delete this product?");
  if(v==true)
  this.productsService.deleteProduct(p).subscribe(data=>{
this.onGetAllProducts();
})
}

addNewProduct(){
this.router.navigateByUrl("/newProduct")

}

editProduct(p:Product){
this.router.navigateByUrl("/editProduct/"+p.id)

}



}
