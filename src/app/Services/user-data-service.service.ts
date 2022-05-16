import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPosts } from '../Shared Classes and types/IPosts';
import { IUsers } from '../Shared Classes and types/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private http: HttpClient) { }
  private _URLUsers = 'https://jsonplaceholder.typicode.com/users'
  private _URLPosts = 'https://jsonplaceholder.typicode.com/posts'
  getUsers():Observable<IUsers[]>
  {
    return this.http.get<IUsers[]>(this._URLUsers).pipe(catchError((err)=>{
        return throwError(err.message || "Server Error")
    })
    )
  }
  getPosts():Observable<IPosts[]>
  {
    return this.http.get<IPosts[]>(this._URLPosts).pipe(catchError((err)=>{
      return throwError(err.message || "Server Error")
  })
  )
}
}
