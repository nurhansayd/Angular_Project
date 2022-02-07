import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'Home' , component: HomeComponent},
  {path:'Products' , component:ProductComponent},
  {path:'Users', component:UserComponent},
  {path:'Posts', component:PostComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
