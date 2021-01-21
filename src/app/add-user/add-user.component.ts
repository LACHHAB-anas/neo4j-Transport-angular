import { Component, OnInit } from '@angular/core';
import { AddUserServiceService } from '../add-user-service.service';
import { NgForm } from '@angular/forms' ; 
import { User } from '../user';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

   nameUser= "Anas" ; 
   user = new User();

  constructor(private service:AddUserServiceService) { }

  ngOnInit(): void {
    
  }

  addUser(){
    this.service.addUser(this.user).subscribe(
      (data)=>{
        console.log(this.user);
      },
      err=>{
        console.log(err);
      }
    )
  }

  onFormSubmit(userForm:NgForm) {
    console.log(userForm.value.UserFirstName)
  }

  resetUserForm(userFom:NgForm) {
    userFom.resetForm();
  }

}
