import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-txt',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css']
})
export class TxtComponent implements OnInit {

  viewer = 'google';     
  docUrl="https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt"  

  constructor() { }

  ngOnInit(): void {
  }

}
