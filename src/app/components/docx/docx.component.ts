import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docx',
  templateUrl: './docx.component.html',
  styleUrls: ['./docx.component.css']
})
export class DocxComponent implements OnInit {

  viewer = 'url';  
  selectedType = 'txt';   
  DemoDoc="https://drive.google.com/file/d/0B5ImRpiNhCfGZDVhMGEyYmUtZTdmMy00YWEyLWEyMTQtN2E2YzM3MDg3MTZh/preview"  
  //DemoDoc="C:\Users\syemuddink\Downloads\example.docx"

  constructor() { }

  ngOnInit(): void {
  }

}
