import { Component } from '@angular/core';
import { Event } from '../../Model/eventmodel';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  events: Event[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(events => this.events = events);
  }
}
