import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ; 

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(userForm:NgForm) {
    console.log(userForm.value.UserFirstName)
  }

  resetTransportForm(userFom:NgForm) {
    userFom.resetForm();
  }

}
