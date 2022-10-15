import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './body/home/home.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ContactComponent } from './contact/contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './add-match/add-match.component';
import { AdminComponent } from './admin/admin.component';
import { BannerComponent } from './banner/banner.component';
import { PlayerComponent } from './player/player.component';
import { CarassouelComponent } from './carassouel/carassouel.component';
import { MatchComponent } from './match/match.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    SignUpComponent,
    LoginComponent,
    AddMatchComponent,
    AdminComponent,
    BannerComponent,
    PlayerComponent,
    CarassouelComponent,
    MatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
