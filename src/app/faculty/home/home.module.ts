import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, NotificationComponent, FacultyhomeComponent,SidenavigationComponent]
})
export class HomeModule { }
