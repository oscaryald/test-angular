import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';


const appRoutes: Routes = [
	{
		path:'',
		component: PostsComponent,
		pathMatch: 'full'
	},
]

@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRouterModule{

}