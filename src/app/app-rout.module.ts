import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users-page/users.component'

const appRoutes: Routes = [
	{
		path:'',
		component: UsersComponent,
		pathMatch: 'full'
	},
	{ 
		path: '**',
	 	redirectTo: ''
	}
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