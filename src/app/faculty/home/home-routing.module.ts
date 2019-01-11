import { NgModule } from '@angular/core';
import { Routes, RouterModule, OutletContext } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: 'faculty',
    component: FacultyComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'facultyhome',
            component: FacultyhomeComponent
          }
        ]
      }
    ]
  },
  {
    path: 'facultyhome',
    component: FacultyhomeComponent,
    children: [
      {
        path: 'notification',
        component: NotificationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
