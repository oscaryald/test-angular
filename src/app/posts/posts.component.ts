import  { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PostsService } from '../shared/posts.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

	posts = [];

	
	@ViewChild('countRows') countRows: ElementRef;

	constructor(private postsService: PostsService){
	}

	ngOnInit(){
        this.getPosts();

	}

    getPosts(){
		this.postsService.getPosts()
    	.subscribe(posts => {
            this.posts =  posts
        });
	}


    onChangeCheckbox(value){

        this.getPosts();

        let searcPostList = this.posts;

        searcPostList = this.posts.filter((post) => {
            return post.category.indexOf(value.toLowerCase()) !== -1
        });

        this.posts = searcPostList

	}

	onChange(value){
		this.getPosts();
		let searchUsersList = this.posts.filter((post) => {
			for(let key in post){
				if(!post.hasOwnProperty(key)) continue;
				let param = post[key].toString().toLowerCase();
				if(param.indexOf(value.toLowerCase()) !== -1) return true;
			}	
		});
		return this.posts = searchUsersList
	}

}
