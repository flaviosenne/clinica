import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private _userData = new BehaviorSubject<User>({
  //   _id: ''
  // })
  private userDate: User = {
    _id: ''
  }
  constructor() { }

  getUser(): User{
    return this.userDate
  }

  setUser(user: String){
    this.userDate._id = user
  }
}
