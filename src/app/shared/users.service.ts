import { Injectable } from '@angular/core';

import { USERS } from './users-list';

@Injectable()
export class UsersService {

	users = USERS;

	getUsers(){
		return this.users
	}

	
}