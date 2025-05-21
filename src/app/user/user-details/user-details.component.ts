import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {
public userDetail;
constructor(private userService: UserService){
  this.userDetail = userService.getUserDetails();
}

  getColor(value){

    if(value === 'male'){

      return 'color: blue'

    } 
    if(value === 'female' ){
      return "color: pink"
    }
  }

  getValue(value){
    return value !== "" ? value : '[ optional ]';
  }
}
