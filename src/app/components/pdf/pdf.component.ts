import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  // viewer = 'google';  
  // //selectedType = 'txt';   
  // DemoDoc="http://www.africau.edu/images/default/sample.pdf"  
  viewer = "google";
  viewerUrl = "https://docs.google.com/gview?url=%URL%&embedded=true";
  docUrl = "http://www.africau.edu/images/default/sample.pdf"

  constructor() { }

  ngOnInit(): void {
  }

}
