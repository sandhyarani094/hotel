import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
show(){
  alert("HI I am here Boss");
}
}
