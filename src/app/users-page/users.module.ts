import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersService } from '../shared/users.service';
import { UserSortPipe } from './pipe-sort/sort.pipe';
import { FilterUsersComponent } from './filter-users/filter-users.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserSortPipe,
    FilterUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [UsersService],
})
export class UsersModule { }