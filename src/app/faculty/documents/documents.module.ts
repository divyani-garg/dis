import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { RecentComponent } from './recent/recent.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ],
  declarations: [DocumentsComponent, RecentComponent]
})
export class DocumentsModule { }
