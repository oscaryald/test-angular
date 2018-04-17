import {Component, OnInit} from '@angular/core';

import {PostsService} from '../shared/posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts = [];
    category = [];
    enabled = false;

    constructor(private postsService: PostsService) {
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.postsService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
                this.category = this.getCategories(posts);
            });
    }

    getCategories(posts) {
        let obj = {};
        let arr = posts.filter((post) => {
            if (obj[post.category]) return obj[post.category];
            obj[post.category] = true;
        });
        return arr;
    }

    onChangeCheckbox(value) {

        this.getPosts();

        let searcPostList = [];

        this.posts.forEach((post) => {
            if (post.category === value.text.toLowerCase()) {
                if (value.categoryName === true) {
                    post.isActive = true;
                } else {
                    post.isActive = false;
                }
            }
        });
        this.enabled = false;
        searcPostList = this.posts.filter((post) => {
            if (post.isActive) {
                this.enabled = true;
                return post;
            }
        })
        if (searcPostList.length === 0) return;
        this.posts = searcPostList;
    }

    onChange(value) {
        this.getPosts();
        let searchUsersList = this.posts.filter((post) => {
            if (this.enabled) {
                return post.title.indexOf(value.toLowerCase()) !== -1 && post.isActive === true;
            } else {
                return post.title.indexOf(value.toLowerCase()) !== -1;
            }
        });
        return this.posts = searchUsersList;
    }

}
