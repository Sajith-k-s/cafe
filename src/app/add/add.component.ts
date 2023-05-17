import { Component } from '@angular/core';
import { MyData } from 'src/method/myData';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  contactName: string='' 
  contact:MyData={} 

  constructor(private api:ApiService,private router:Router){}

  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{
    this.router.navigateByUrl('')
   })
 }
}



 