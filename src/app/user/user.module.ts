import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserRegisterComponent, 
    UserDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports: [UserComponent,]
})
export class UserModule { }
