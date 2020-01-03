import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  REST_API_URL = "https://jsonplaceholder.typicode.com/users/"
  
  constructor(private http: HttpClient) { }

  getRestaurantsByName(restaurantsData: Observable<any>) {
    console.log(restaurantsData);
    return this.http.get(this.REST_API_URL+restaurantsData)
    .pipe( map((res: any) =>{
      console.log(res);      
      return res;
    }));
  }
}
