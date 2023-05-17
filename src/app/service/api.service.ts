import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyData } from 'src/method/myData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = ' http://localhost:3000/Hotels'

  constructor(private http:HttpClient) { }

  
 getAllContacts():Observable<MyData>{
  return this.http.get(this.baseUrl)
 }
 viewContact(contactId:any){
  return this.http.get(`${this.baseUrl}/${contactId}`)
 }
 addContact(contactBody:any){
  return this.http.post(this.baseUrl,contactBody)
}

deleteContact(contactId:any){
  return this.http.delete(`${this.baseUrl}/${contactId}`)
}
updateContact(contactId:any,contactBody:any){
  return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}
}
