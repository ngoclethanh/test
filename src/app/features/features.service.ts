import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment.ts/environment';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  public url=environment.endpoint_url;
  constructor(private http:HttpClient) { }
  private data = new Subject<string>();
  loadData():Observable<any>{
      return this.http.get(this.url+ '/posts')
  }
  post(data:any){
    return this.http.post(this.url+ '/posts', data)
  }
  addCommons(data:any){
    return this.http.post(this.url+ '/commons', data)
  }

  setData(message: string) {
    this.data.next(message);
  }
  deletePost(data:any){
    return this.http.delete(this.url+ '/posts', 
      data
    )
  }
  
  getData() {
    return this.data.asObservable();
  }
}
