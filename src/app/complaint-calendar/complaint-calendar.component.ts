import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-calendar',
  templateUrl: './complaint-calendar.component.html',
  styleUrls: ['./complaint-calendar.component.css']
})
export class ComplaintCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  date = new Date();
  events = [{
    title: 'An event',
    color: "#ff00ddf",
    start:new Date()
  }];


}
