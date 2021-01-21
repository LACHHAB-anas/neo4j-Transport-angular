import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransportComponent } from './add-transport/add-transport.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdequatTransComponent } from './adequat-trans/adequat-trans.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ShortestPathComponent } from './shortest-path/shortest-path.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
   { path:"adduser", component: AddUserComponent },
   { path:"addtransport", component: AddTransportComponent },
   { path:"allusers", component: AllusersComponent },
   { path:"adequatTrans", component: AdequatTransComponent },
   { path:"shortestPath", component: ShortestPathComponent },
   { path:"", component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
