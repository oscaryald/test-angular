import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostsService } from '../shared/posts.service';
import { FilterUsersComponent } from './filter-users/filter-users.component';
import { PostsCategoryComponent } from './posts-category/posts-category.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostsCategoryComponent,
    FilterUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [PostsService],
})
export class PostsModule { }