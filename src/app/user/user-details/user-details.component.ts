import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {


  userDetail = [
    {firstname:'shekhar',middlename:'',lastname:'polepaka',gender:'male',username:'pshekhar',email:'shekhar@gmail.com'},
    {firstname:'ramya',middlename:'kumari',lastname:'pasula',gender:'female',username:'pasulaRamya',email:'pasula@gmail.com'},
    {firstname:'venkat',middlename:'rao',lastname:'jangili',gender:'male',username:'venkatJ',email:'venkatRao@gmail.com'},
    {firstname:'rajini',middlename:'',lastname:'B',gender:'female',username:'rajini123',email:'rajini12@gmail.com'},
    {firstname:'shiva',middlename:'kumar',lastname:'regonda',gender:'male',username:'sregonda',email:'shiva@gmail.com'},
  ]

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
