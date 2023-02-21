import { Component, OnInit } from '@angular/core';
import { Event } from '../../Model/eventmodel';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  filterType: string = '';
  startTime: string = '';
  endTime: string = '';
  public events: Event[] = [];

  eventToUpdate: Event = { id: 0, title: '', time: '', type: '' };

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  onEditEvent(event: Event) {
    console.log("Evénement sélectionné : ", event);
    this.eventToUpdate = event;
    console.log("Valeur de eventToUpdate : ", this.eventToUpdate);
  }

  onSubmitForm() {
    // Mettre à jour l'événement sélectionné avec les nouvelles valeurs
    console.log("Valeur de eventToUpdate avant mise à jour : ", this.eventToUpdate);
    const index = this.events.findIndex(event => event.id === this.eventToUpdate.id);
    if (index !== -1) {
      this.events[index] = { ...this.eventToUpdate };
    }
    console.log("Valeur de eventToUpdate après mise à jour : ", this.eventToUpdate);
    console.log("Evénements après mise à jour : ", this.events);
  }

  deleteEvent(id: number): void {
    this.eventsService.deleteEvent(id).subscribe(() => {
      this.events = this.events.filter(event => event.id !== id);
    });
  }
}
