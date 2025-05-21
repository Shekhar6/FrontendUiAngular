import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public userDetail;
  constructor() {
  this.userDetail = [
    {firstname:'shekhar',middlename:'',lastname:'polepaka',gender:'male',username:'pshekhar',email:'shekhar@gmail.com'},
    {firstname:'ramya',middlename:'kumari',lastname:'pasula',gender:'female',username:'pasulaRamya',email:'pasula@gmail.com'},
    {firstname:'venkat',middlename:'rao',lastname:'jangili',gender:'male',username:'venkatJ',email:'venkatRao@gmail.com'},
    {firstname:'rajini',middlename:'',lastname:'B',gender:'female',username:'rajini123',email:'rajini12@gmail.com'},
    {firstname:'shiva',middlename:'kumar',lastname:'regonda',gender:'male',username:'sregonda',email:'shiva@gmail.com'},
  ]
   }

   getUserDetails():any{
      return this.userDetail;
   }

   pushUserDetaails(user: any):any{
    if(user !== null)
      this.userDetail.push(user);
   }

  
}
