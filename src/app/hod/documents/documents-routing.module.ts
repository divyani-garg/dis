import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsSectionAComponent } from './documents-section-a/documents-section-a.component';
import { HodComponent } from '../hod/hod.component';

const routes: Routes = [
  {
    path: 'hod',
    component: HodComponent,
    children: [
      {
        path: 'documents',
        component: DocumentsComponent,
        children:[
          {
            path: '',
            component: DocumentsSectionAComponent
          }
          
        ]
      },
     
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
