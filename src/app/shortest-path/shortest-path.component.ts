import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ; 

@Component({
  selector: 'app-shortest-path',
  templateUrl: './shortest-path.component.html',
  styleUrls: ['./shortest-path.component.css']
})
export class ShortestPathComponent implements OnInit {

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
