import { Component } from '@angular/core';
import { MyData } from 'src/method/myData';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  allContacts:MyData[]=[]
  searchKey:string=''

  constructor(private api:ApiService){
  }

      ngOnInit():void{
        this.getAllContacts()
        }
     
        getAllContacts(){
         this.api.getAllContacts().subscribe((data:any)=>{
           console.log(data); //array of contacts
           this.allContacts=data //array of contacts
         
         })
        }
     
     nameChange(){
       alert('Name Change')
     }
     
     search(event:any){
       console.log(event.target.value);
       this.searchKey=event.target.value
     }
     deleteContact(contactId:any){
       this.api.deleteContact(contactId).subscribe((data:any)=>{
         this.getAllContacts()
         alert('Item Deleted')
       })
     }
     }