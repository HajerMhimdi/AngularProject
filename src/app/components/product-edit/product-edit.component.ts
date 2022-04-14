import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

productId:number;

productFormGroup:FormGroup;

submitted:boolean=false;


  constructor(private activatedRoute:ActivatedRoute, private productsService:ProductsService, private formBuilder:FormBuilder) { 

    this.productId=this.activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.productsService.getProducts(this.productId)
    .subscribe(product=>{
      this.productFormGroup=this.formBuilder.group({
        id : [product.id,Validators.required],
      name: [product.name, Validators.required],
      price: [product.price, Validators.required],
      quantity: [product.quantity, Validators.required],
      selected: [product.selected, Validators.required],
      available: [product.available, Validators.required]
    })

    })
  }
  onEdit(){
    let v = confirm("Are you sure you want to edit this product?");
    if(v==true)
    this.productsService.updateProduct(this.productFormGroup.value).subscribe(data=>{
  alert("Success Product updated");
  })
  }


}