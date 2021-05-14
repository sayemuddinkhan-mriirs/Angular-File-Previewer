import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDocViewerModule } from 'ngx-doc-viewer';  


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocxComponent } from './components/docx/docx.component';

@NgModule({
  declarations: [
    AppComponent,
    DocxComponent
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
