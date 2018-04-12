import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-posts-category',
  templateUrl: './posts-category.component.html',
  styleUrls: ['./posts-category.component.css']
})
export class PostsCategoryComponent implements OnInit {

  @Input() category;
  categoryName

    @Output() filterCatChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

    filterChange(value){
        this.filterCatChange.emit(value)
    }

}
