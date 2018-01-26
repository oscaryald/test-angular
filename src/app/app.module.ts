import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users-page/users.component';
import { FormPageComponent } from './form-page/form-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AppRouterModule } from './app-rout.module';
import { UsersModule } from './users-page/users.module';


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
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
