import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent  {

  register = new FormGroup ({
    firstname : new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
    middlename: new FormControl(''),
    gender: new FormControl(''),
    username: new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.required)

  })

  /**
   *
   */
  constructor(private userService: UserService) {
  }
  OnSubmit(){
    this.userService.pushUserDetaails(this.register.value);
  }
}
