import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {
  name:any;
  restaurantsForm: FormGroup
  constructor(private restaurantsService: RestaurantsService) {     
  }

  ngOnInit() {
    // document.body.classList.add('bg-img');
    this.restaurantsForm = new FormGroup({
      name: new FormControl('',Validators.required)
    });

  }

  onSearch(){
    console.log(this.restaurantsForm.value);
    this.restaurantsService.getRestaurantsByName(this.restaurantsForm.value);
    
  }

}
