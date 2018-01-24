import  { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

import { UserSortPipe } from './pipe-sort/sort.pipe';


@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	pipes: [ UserSortPipe ]
})
export class UsersComponent implements OnInit{

	users:any[] = [];

	setSortField: any = '';

	constructor(private usersService: UsersService){}

	ngOnInit(){
		this.users = this.usersService.getUsers()
	}

	chooseSort(e){
		this.setSortField = e.target.attributes['data-type'].value;
	}
}
