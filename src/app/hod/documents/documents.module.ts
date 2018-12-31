import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsSectionAComponent } from './documents-section-a/documents-section-a.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ],
  declarations: [DocumentsComponent, DocumentsSectionAComponent]
})
export class DocumentsModule { }
