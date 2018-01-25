import  { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../shared/users.service';
import { UserSortPipe } from './pipe-sort/sort.pipe';


@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	pipes: [ UserSortPipe ]
})
export class UsersComponent implements OnInit{

	users = [];
	setSortField: any;
	userLength: any[] = [];
	setCount: number;
	id: number;

	
	@ViewChild('countRows') countRows: ElementRef;

	constructor(private usersService: UsersService, private route: ActivatedRoute){}

	ngOnInit(){
		this.users = this.usersService.getUsers()
		this.userLength = this.users;
		this.setCount = this.users.length
		this.users = this.users.slice(0, this.setCount);


		this.id = +this.route.snapshot.params['id'];

		console.log(this.route.snapshot)

	    this.route.params.subscribe((params: Params) => {
	    	console.log(params)
	      this.id = +params['id']
	    })
	}

	chooseSort(e){
		this.setSortField = e.target.attributes['data-type'].value;
	}

	onChange(value){
		this.users = this.usersService.getUsers();
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
		this.users = this.usersService.getUsers();
		return this.users = this.users.slice(0, +this.countRows.nativeElement.value)
	}
}
