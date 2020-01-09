import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  REST_API_URL = 'http://localhost:3000/userdetails';

  constructor(private http: HttpClient) { }

  loginUser(formData: any) {
    console.log(formData);
    const loginpromise = new Promise((resolve, reject)=>{
      this.http.post(this.REST_API_URL, formData)
      .toPromise()
      .then((res)=>{
        console.log(res);
        resolve(res);
      })
      .catch((err)=>{
        console.log(err);
        reject(err);
      }).finally(()=>{
        console.log('Post form data successfully');
      })
    })
    return loginpromise as Promise<any>;
  }
}
