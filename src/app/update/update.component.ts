import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MyData } from 'src/method/myData';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  contactId: any='';

  contact:MyData={}

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService, private route:Router){}
 
  ngOnInit():void {
   this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data); //{Id: 'c4'}
    console.log(data.Id); //c4
    this.contactId=data['Id']
    console.log( this.contactId);
    
    this.api.viewContact(this.contactId).subscribe((data:any)=>{
      console.log(data); //data of particular contact
      this.contact= data
    })
   })
  }

  updateContact(){
    this.api. updateContact(this.contactId,this.contact).subscribe((data:any)=>{
      console.log(data);
      
      this.route.navigateByUrl('')
    })
  }
}



