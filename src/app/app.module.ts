import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AppRouterModule } from './app-rout.module';
import { PostsModule } from './posts/posts.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    PostsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
