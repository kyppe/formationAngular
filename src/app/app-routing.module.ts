import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './add-match/add-match.component';
import { AdminComponent } from './admin/admin.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './body/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path: "",component: HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"sign_up",component:SignUpComponent},
  {path:"add-match",component:AddMatchComponent},
  {path:"Admin",component:AdminComponent},
  {path:"player",component:PlayerComponent},
  {path:"banner",component:BannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
