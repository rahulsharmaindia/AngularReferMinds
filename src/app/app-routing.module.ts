import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostajobComponent } from './postajob/postajob.component';
import { ReferraljobsComponent } from './referraljobs/referraljobs.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes:Routes = [
  {path:'postajob',component:PostajobComponent},
  {path:'referraljobs',component:ReferraljobsComponent},
  {path:'howitworks',component:HowitworksComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
  ];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppRoutingModule { }
