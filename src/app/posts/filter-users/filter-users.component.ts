import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filterName: string;
  @Output() filterNameChange = new EventEmitter<string>();


  filterChange(value){
  	this.filterNameChange.emit(value)
  }
}
