import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes = [
   {path: 'register',component:UserRegisterComponent},
   {path: 'details',component:UserDetailsComponent}
   
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}