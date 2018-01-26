import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Users } from './users';
import { USERS } from './users-list';

@Injectable()
export class UsersService {

	users = USERS;

	constructor(){}

	getUsers(): Observable<Users[]>{
	  return of(this.users);
	}

	getUser(id: number): Observable<Users> {
	    return of(this.users.find(user => user.id === id))
	}

}