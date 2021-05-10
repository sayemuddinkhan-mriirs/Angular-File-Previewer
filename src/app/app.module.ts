import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDocViewerModule } from 'ngx-doc-viewer';  


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { TxtComponent } from './components/txt/txt.component';
import { DocxComponent } from './components/docx/docx.component';
import { PptxComponent } from './components/pptx/pptx.component';
import { ExcelComponent } from './components/excel/excel.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    TxtComponent,
    DocxComponent,
    PptxComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
