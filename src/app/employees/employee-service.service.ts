import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  REST_API_URL  = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  onCreateEmployee(employeeData){

    console.log(employeeData);
    console.log(this.REST_API_URL);
    
    const createEmployeePromise = new Promise((resolve, reject) =>{
     
      this.http.post(this.REST_API_URL, employeeData)
      .toPromise()
      .then( (res: any) => {
        console.log(res);
        resolve (res);
      })
      .catch((err: any) =>{
        console.log(err);
        reject (err);
      })
      .finally(() =>{
        console.log('End of createEmployeePromise');
      })

    });

    return createEmployeePromise as Promise<any>;
    
  }

  getEmployee(){
    return this.http.get(this.REST_API_URL)
    .pipe(map((res: any)=>{
      return res;
    }));
  }

}
