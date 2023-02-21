import {Component, OnInit} from '@angular/core';


interface CALENDARS {
  id: Number;
  title: String;
  time: String;
  type: String;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }

}
