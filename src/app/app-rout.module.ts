import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users-page/users.component';
import { FormPageComponent } from './form-page/form-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const appRoutes: Routes = [
	{
		path:'',
		component: UsersComponent,
		pathMatch: 'full'
	},
	{
		path:'form',
		component: FormPageComponent,
	},
	{
		path:'users/:id',
		component: UserProfileComponent,
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