import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MypipePipe } from './mypipe.pipe';
import { ErrorComponent } from './error/error.component';
import { NewsComponent } from './home/news/news.component';
import { EventsComponent } from './home/events/events.component';
import { HomeGuard } from './home/home.guard';
const routes: Routes = [
{  canActivate:[HomeGuard],path:'',component:HomeComponent,children:[{path:'news',component:NewsComponent},{path:'events',component:EventsComponent}]},
{path:'about',component:AboutComponent},
{path:'contact/:name/:address',component:ContactusComponent},
{path:'error',component:ErrorComponent},
{path:'**',redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
providers:[HomeGuard],



exports: [RouterModule,MypipePipe],
  declarations: [HomeComponent,ErrorComponent, AboutComponent, ContactusComponent, MypipePipe, NewsComponent,
    EventsComponent]
})
export class AppRoutingModule { }
