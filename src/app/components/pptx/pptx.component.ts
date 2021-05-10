import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pptx',
  templateUrl: './pptx.component.html',
  styleUrls: ['./pptx.component.css']
})
export class PptxComponent implements OnInit {

  viewer = "google";
  docUrl = {
    ppt: "https://drive.google.com/file/d/1eqQRBovr4krWRtX91she9OQwAjJUf8Ok/view?usp=sharing",
    pptx: "https://drive.google.com/file/d/1Vnp0EEu56CH-Ir9i1JOJbfEzVxqcEjUR/view?usp=sharing"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
