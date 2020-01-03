import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {


  constructor() { 
    
      let value = 'Clear me';
    
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  onSearch(){
    
  }

}
