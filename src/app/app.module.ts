import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './home/menu/menu.component';
import { FooterComponent } from './home/footer/footer.component';
import { MenuaComponent } from './menua/menua.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    MenuComponent,
    FooterComponent,
    MenuaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
