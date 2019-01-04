import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from '../faculty/faculty.component';
import { DocumentsComponent } from './documents/documents.component';
import { RecentComponent } from './recent/recent.component';

const routes: Routes = [
  {
    path : 'faculty',
    component : FacultyComponent,
    children : [
      {
        path : 'documents',
        component : DocumentsComponent,
        children:[
          {
            path : '',
            component : DocumentsComponent
          },
          {
            path : 'recent',
            component : RecentComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
