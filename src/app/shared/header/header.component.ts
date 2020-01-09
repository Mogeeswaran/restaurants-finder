import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  logout(){
    console.log('inside logout');
    localStorage.removeItem('user');
    setTimeout(() => {
      this.router.navigate(['']);
    }, 500);
  }

}
