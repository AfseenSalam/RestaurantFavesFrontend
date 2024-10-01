import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../models/order';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent {
@Output() Created = new EventEmitter<Order>();
formOrder:Order={} as Order;

emitCreated(){
  let result :Order ={...this.formOrder};
  this.Created.emit(result);
  this.formOrder = {} as Order;
}
}
