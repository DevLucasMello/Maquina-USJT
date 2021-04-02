import { ElevadorComponent } from './navegacao/home/elevador/elevador.component';
import { HomeComponent } from './navegacao/home/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './navegacao/modal/modal/modal.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MenuComponent } from './navegacao/menu/menu/menu.component';
import { MaquinaComponent } from './navegacao/home/maquina/maquina.component';
import { FooterComponent } from './navegacao/footer/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MaquinaComponent,
    ElevadorComponent,
    MenuComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    MatDialogModule
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    MaquinaComponent,
    ElevadorComponent,
    MenuComponent,
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
