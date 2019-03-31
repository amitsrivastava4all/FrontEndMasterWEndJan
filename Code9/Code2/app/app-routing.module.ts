import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MypipePipe } from './mypipe.pipe';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact/:name/:address',component:ContactusComponent},
{path:'error',component:ErrorComponent},
{path:'**',redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule,MypipePipe],
  declarations: [HomeComponent,ErrorComponent, AboutComponent, ContactusComponent, MypipePipe]
})
export class AppRoutingModule { }
