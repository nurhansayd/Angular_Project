import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    UserComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
