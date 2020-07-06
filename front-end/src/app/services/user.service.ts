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
  private userData: User = {
    _id: ''
  }

  private prop: String = 'none'

  constructor() { }

  getUser(): User{
    return this.userData
  }

  setUser(user: String){
    this.userData._id = user
  }

  getProp(): String {
    return this.prop
  }

  setProp(prop: String): void {
    this.prop = prop
  }
  
}
