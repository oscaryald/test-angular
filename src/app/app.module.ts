import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users-page/users.component';

import { AppRouterModule } from './app-rout.module';
import { UsersModule } from './users-page/users.module';
// import { FormPageModule } from './form-page/form-page.module';
import { FormPageComponent } from './form-page/form-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    UsersModule,
    // FormPageModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
