import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { HomeComponent } from './home/home.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomeFacultyComponent } from './home-faculty/home-faculty.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [NotificationComponent, HomeComponent, SideNavigationComponent, HomeFacultyComponent]
})
export class HomeModule { }
