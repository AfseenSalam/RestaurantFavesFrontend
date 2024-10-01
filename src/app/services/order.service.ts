import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
url:string ="https://localhost:7179/api/Order";
  constructor(private http:HttpClient) { }
getAll(orderAgain?:boolean):Observable<Order[]>{
  if(orderAgain!= undefined){
return this.http.get<Order[]>(this.url+`&orderAgain=${orderAgain}`);
  }else{
    return this.http.get<Order[]>(this.url);
  }
  
}
deleteOrder(id:number):Observable<void>{
  return this.http.delete<void>(this.url+`/${id}`);
}
addOrder(o:Order):Observable<Order>{
  return this.http.post<Order>(this.url,o);
}

}
