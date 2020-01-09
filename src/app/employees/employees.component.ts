import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';
import { Subscription } from  'rxjs';
import { MymodalComponent } from '../mymodal/mymodal.component';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthserviceService } from '../auth/authservice.service';

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
  modalOptions: NgbModalOptions;


  constructor(private fb: FormBuilder, private modalservice: NgbModal, private employeeService: EmployeeServiceService, private authservice: AuthserviceService ) { 
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.email],
      phone: ['',Validators.required]
    });

    if (!this.authservice.loginCount) {
      this.open1();
    }
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

  open1() {
    console.log('inside modal');
    const modalRef = this.modalservice.open(MymodalComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }

}
