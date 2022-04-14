import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  @Input() productsInput$: Observable<AppDataState<Product[]>>;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();


  readonly DataStateEnum = DataStateEnum;


  constructor() { }

  ngOnInit(): void {
  }


  onSelect(p: any) {
    this.productEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload: p})
    
  }
  onDelete(p: any) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.DELETE_PRODUCT, payload: p
    });

  }
  editProduct(p: any) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCT, payload: p
    });
  
  }

  onActionEvent($event: ActionEvent){
    this.productEventEmitter.emit($event);
  }
}
