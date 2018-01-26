import  { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { UsersService } from '../shared/users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

	users = [];
	setSortField: any;
	userLength: any[] = [];
	setCount: number;
	id: number;

	
	@ViewChild('countRows') countRows: ElementRef;

	constructor(private usersService: UsersService){
	}

	ngOnInit(){
		this.getUsers();
		this.userLength = this.users;
		this.setCount = this.users.length
		this.users = this.users.slice(0, this.setCount);


	}

	getUsers(){
		this.usersService.getUsers()
    	.subscribe(users => this.users = users);
	}

	

	chooseSort(e){
		this.setSortField = e.target.attributes['data-type'].value;
	}

	onChange(value){
		this.getUsers();
		let searchUsersList = this.users.filter((user) => {
			for(let key in user){
				if(!user.hasOwnProperty(key)) continue;
				let param = user[key].toString().toLowerCase();
				if(param.indexOf(value.toLowerCase()) !== -1) return true;
			}	
		});
		return this.users = searchUsersList
	}

	setCountRows(){
		this.getUsers();
		return this.users = this.users.slice(0, +this.countRows.nativeElement.value)
	}
}
