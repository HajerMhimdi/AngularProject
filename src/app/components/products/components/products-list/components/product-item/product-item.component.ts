import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product?:Product ;
  @Output() eventEmitter:EventEmitter<ActionEvent>= new EventEmitter<ActionEvent>();
  
  
  constructor() { }

  ngOnInit(): void {
  }


  onSelect(product:Product){console.log("hellooooo")
    this.eventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:product})
  }
  onDelete(product:any){
    this.eventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:product})
  }
  editProduct(product:any){
    this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:product})
  }
}
