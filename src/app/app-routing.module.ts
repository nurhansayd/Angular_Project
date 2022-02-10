import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { ProductWithDiscountComponent } from './product/product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product/product-without-discount/product-without-discount.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home' , component: HomeComponent},
  {path:'Products' , component:ProductComponent,children:[
    {path:'discount', component:ProductWithDiscountComponent},
    {path:'nodiscount', component:ProductWithoutDiscountComponent},
  ]},
  {path:'Users', component:UserComponent},
  {path:'Posts', component:PostComponent},
  {path: 'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'Notes', component:NotesComponent},
  {path:'**', component:PageNotFoundComponent},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
