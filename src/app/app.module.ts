import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FourOfourComponent } from './pages/four-ofour/four-ofour.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ChangepwComponent } from './pages/change-pw/changepw.component';
import { CreateuserComponent } from './pages/create-user/createuser.component';
import { CreateAnuncioComponent } from './pages/create-anuncio/create-anuncio.component';
import { LostPasswordComponent } from './pages/lost-password/lost-password.component';
import { ChatComponent } from './pages/chat/chat.component';
import { GuardadosComponent } from './pages/guardados/guardados.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChangepwComponent,
    CreateuserComponent,
    EditProfileComponent,
    NavBarComponent,
    FourOfourComponent,
    CreateAnuncioComponent,
    LostPasswordComponent,
    ChatComponent,
    GuardadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
