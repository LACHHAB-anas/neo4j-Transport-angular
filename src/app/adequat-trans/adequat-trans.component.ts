import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ; 

@Component({
  selector: 'app-adequat-trans',
  templateUrl: './adequat-trans.component.html',
  styleUrls: ['./adequat-trans.component.css']
})
export class AdequatTransComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(userForm:NgForm) {
    console.log(userForm.value.UserFirstName)
  }

  resetUserForm(userFom:NgForm) {
    userFom.resetForm();
  }

}
