import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { AddOrderComponent } from "../add-order/add-order.component";

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [AddOrderComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
 
allOrder:Order[]=[];
constructor(private orderService:OrderService){};
ngOnInit(){
this.callApiGetAll();
}
callApiGetAll(){
  this.orderService.getAll().subscribe(response =>{
    console.log(response);
    this.allOrder = response;
  });
}
callApiAddOrder(newOrder:Order){
  this.orderService.addOrder(newOrder).subscribe(response => {
    console.log(response);
    this.callApiGetAll();
  });
}
callApiDeleteOrder(target:Order){
  this.orderService.deleteOrder(target.id).subscribe(response => this.callApiGetAll());
}
}
