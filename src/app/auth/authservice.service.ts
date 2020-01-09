import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  REST_API_URL = 'http://localhost:3000/userdetails/';
  loginCount:any;
  userdata:any;

  constructor(private http: HttpClient) { }

  loginUser(formData: any) {
    console.log(formData);
    const loginpromise = new Promise((resolve, reject)=>{
      this.http.post(this.REST_API_URL+'userlogin', formData)
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

  getuser() {

    this.userdata = JSON.parse(localStorage.getItem('user'));
    console.log('user', this.userdata.Email);
    return this.userdata.Email;
  }

  Enrolldetails(formData:any){
    
    const enroldata = new Promise((resolve, reject) => {
      this.http.post(this.REST_API_URL, formData).toPromise().then((res) => {
        resolve(res);
      }).catch((err) =>{
        reject(err);
      }).finally(() =>{
        console.log('posted data successfully');
      })
    })
    return enroldata;

  }

  updatepassword(formData){
    
    const updatepass = new Promise((resolve,reject) => {
      this.http.post(this.REST_API_URL + 'passwordupdate',formData).toPromise().then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      }).finally(() => {
        console.log('updated password successfully');
      })
    })
    return updatepass;
  }

  }

