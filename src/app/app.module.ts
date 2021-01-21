import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTransportComponent } from './add-transport/add-transport.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { AllusersComponent } from './allusers/allusers.component';
import { ShortestPathComponent } from './shortest-path/shortest-path.component';
import { AdequatTransComponent } from './adequat-trans/adequat-trans.component' ; 

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddTransportComponent,
    WelcomeComponent,
    AllusersComponent,
    ShortestPathComponent,
    AdequatTransComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
