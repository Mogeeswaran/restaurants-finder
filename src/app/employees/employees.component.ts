import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';
import { Subscription } from  'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeForm: FormGroup;
  isSaved: boolean;
  employeeSubscription : Subscription;
  employeeList: any[];

  constructor(private fb: FormBuilder, private employeeService: EmployeeServiceService ) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.email],
      phone: ['',Validators.required]
    });
  }

  async onCreateEmployee(){
    console.log(this.employeeForm.value);

    const status: any = await this.employeeService.onCreateEmployee(this.employeeForm.value);
    console.log(status);

    if(status && status._id){
      this.isSaved = true;
    }

  }

  onGetEmployee(){
    this.employeeSubscription = this.employeeService.getEmployee()
    .subscribe((res : any[]) => {
      console.log(res);
      this.employeeList = res;
    });
  }

}
