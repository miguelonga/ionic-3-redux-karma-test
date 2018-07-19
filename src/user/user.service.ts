import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  private apiHost: string = 'https://jsonbin.io';

  constructor(private http: Http) {
  }

  public login(email:string, password:string):Observable<any> {
    return new Observable((observer) => {
      observer.next({
        id: '01',
        firstName: 'miguelon',
        lastName: 'mundi',
        email: 'miguel_mundi@gmail.com'
      })
      observer.complete()
    })
  }
}
