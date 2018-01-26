import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {};

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) {}

  ngOnInit() {
  	this.getUser()
  }

  getUser(){
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.usersService.getUser(id)
  					 .subscribe(user => this.user = user);
  }

  goBack(){
    this.location.back();
  }

}
