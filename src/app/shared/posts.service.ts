import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Posts } from './posts';
import { POSTS } from './posts-list';

@Injectable()
export class PostsService {

	posts = POSTS;

	constructor(){}

	getPosts(): Observable<Posts[]>{
	  return of(this.posts);
	}


}