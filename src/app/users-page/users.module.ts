import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { UsersComponent } from './users.component';
import { UsersService } from '../shared/users.service';
import { UserSortPipe } from './pipe-sort/sort.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    UserSortPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [UsersService],
})
export class UsersModule { }