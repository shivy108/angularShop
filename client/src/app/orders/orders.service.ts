import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get(this.baseUrl + 'orders').pipe(
      map(res => {
        return res;
      }, error => {
        console.log(error);
      }
      ));
  }
  getOrderDetails(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }
}
