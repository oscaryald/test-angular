import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  form: FormGroup;
  users = [];
  newUser = {};
  created_at;
  isSubmited: boolean = false

  ngOnInit() {
  	this.users = this.usersService.getUsers();
  	this.form = new FormGroup({
  		name: new FormControl('', Validators.required),
  		email: new FormControl('', [Validators.required, Validators.email]),
  	})
  }

  onSubmit(){
  	this.created_at = new Date()
  	this.newUser = {
  		id: this.users.length + 1,
  		username: this.form.value.name,
  		email: this.form.value.email,
  		created_at: this.created_at
  	}
  	this.users.push(this.newUser);
  	this.isSubmited = true;
  	this.form.reset();
  }


}
