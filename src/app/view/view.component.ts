import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  contactId:string=''
  contact:any=''
  groupid:string=''

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) {}
  
  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId=data.contactId
      console.log(this.contactId);

      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);
        this.contact=data
        this.groupid=data.groupid //3
        console.log(this.contact);
  })
  
})
}
}

