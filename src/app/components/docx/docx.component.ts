import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docx',
  templateUrl: './docx.component.html',
  styleUrls: ['./docx.component.css']
})
export class DocxComponent implements OnInit {

  // viewer = 'url';  
  // selectedType = 'txt';   
  // DemoDoc="https://drive.google.com/file/d/0B5ImRpiNhCfGZDVhMGEyYmUtZTdmMy00YWEyLWEyMTQtN2E2YzM3MDg3MTZh/preview"  
  //DemoDoc="C:\Users\syemuddink\Downloads\example.docx"

  viewer = "google";
  viewerUrl = "https://docs.google.com/gview?url=%URL%&embedded=true";
  docUrl = {
    doc: "https://drive.google.com/file/d/1DP7T1DOHdj8lA0bC_CdhIkWCrKQY8z7T/view?usp=sharing",
    docx: "https://drive.google.com/file/d/1ZgzaNwh5USypXOv0X6u3iQJYxdNp8YL7/view?usp=sharing",
    rtf: "https://drive.google.com/file/d/1bmakLZvTRFLByBSuZrlOEidEKWGiH2DH/view?usp=sharing",
    s3: "https://cloud-court-resources.s3.us-east-2.amazonaws.com/CC+-+High+level+tech+documentation+V1.0.docx"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
