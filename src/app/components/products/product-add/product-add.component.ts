import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productFormGroup: FormGroup;
  constructor(private fbuilder: FormBuilder, private productsService: ProductsService) { }

  submitted:boolean=false;


  ngOnInit(): void {
    this.productFormGroup = this.fbuilder.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]

    })
  }

  onSaveProduct(){
    this.submitted=true;
    if(this.productFormGroup.invalid)return;
    this.productsService.addProduct(this.productFormGroup.value).subscribe(data=>{
      alert("Success saving product")
     
    })
    }


}
