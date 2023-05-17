import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',redirectTo:'hotel/admin',pathMatch:'full'
  },
  {
    path:'hotel/admin',component:HotelComponent
  },
  {
    path:'hotel/add',component:AddComponent
  },
  {
    path:'hotel/update/:Id',component:UpdateComponent
  },
   {
    path:'hotel/view/:contactId', component:ViewComponent
   },
   {
    path:'**', component:PagenotfoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
