import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  viewer = "google";
  viewerUrl = "https://docs.google.com/gview?url=%URL%&embedded=true";
  docUrl = {
    xls: "https://drive.google.com/file/d/1DP7T1DOHdj8lA0bC_CdhIkWCrKQY8z7T/view?usp=sharing",
    xlsx: "https://drive.google.com/file/d/1ZgzaNwh5USypXOv0X6u3iQJYxdNp8YL7/view?usp=sharing"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
