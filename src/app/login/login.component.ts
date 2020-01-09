import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  async onSubmit(form){
    console.log(form.value);
    let loginStatus = await this.authService.loginUser(form.value);
    console.log(loginStatus);
    if(loginStatus.status == 200){
      localStorage.setItem('user', JSON.stringify(loginStatus.data));
      localStorage.setItem('authtoken', loginStatus.authtoken );
      this.authService.loginCount = true; 
      this.router.navigate(['/employee']);
    }else if (loginStatus.status == 409){
      this.router.navigate(['/signup']);
    }
  }

}
