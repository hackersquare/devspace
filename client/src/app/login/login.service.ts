import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  login(): Observable<any> {
    console.log("HI")
    return this._http.get('/api/auth/github')
      .map((res:Response) => res)
  }

}