import { Component, OnInit } from '@angular/core';
import { AddUserServiceService } from '../add-user-service.service';
import { NgForm } from '@angular/forms' ; 



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

   nameUser= "Anas" ; 

  constructor(private service:AddUserServiceService) { }

  ngOnInit(): void {
    
  }

  addUser(){
    
    console.log(this.service.addUser())
  }

  onFormSubmit(userForm:NgForm) {
    console.log(userForm.value.UserFirstName)
  }

  resetUserForm(userFom:NgForm) {
    userFom.resetForm();
  }

}
