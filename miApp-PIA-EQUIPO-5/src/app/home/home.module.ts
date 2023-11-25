import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TomFotoComponent } from '../tomfoto/tomfoto.component';
import { PubfotoComponent } from '../pubfoto/pubfoto.component';
import { ShowphotosComponent } from '../showphotos/showphotos.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule
  ],
  declarations: [HomePage, TomFotoComponent, PubfotoComponent, ShowphotosComponent]
})
export class HomePageModule {}
