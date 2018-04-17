import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostsService} from '../../shared/posts.service';

@Component({
    selector: 'app-posts-category',
    templateUrl: './posts-category.component.html',
    styleUrls: ['./posts-category.component.css']
})
export class PostsCategoryComponent implements OnInit {

    @Input() category;
    categoryName;

    @Output() filterCatChange = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    filterChange() {
        let objInput = {
            categoryName: this.categoryName,
            text: this.category,
        };
        this.filterCatChange.emit(objInput);
    }

}
