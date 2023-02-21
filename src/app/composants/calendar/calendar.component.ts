import {Component, OnInit} from '@angular/core';
import { Event } from '../../Model/eventmodel';
import { EventsService } from '../../services/events.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public events: Event[] = [];

  eventToUpdate: Event;
  event: any;



  constructor(private eventsService: EventsService) {
    this.eventToUpdate = {id: 0, title: '', time: '', type: ''}; // initialiser la variable avec des valeurs par défaut
  }
  onEditEvent(event: Event) {
    this.eventToUpdate = event; // mettre à jour la variable avec l'événement sélectionné
  }

  onSubmitForm() {
    // mettre à jour l'événement sélectionné avec les nouvelles valeurs
    // ...
  }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  deleteEvent(id: number): void {
    this.eventsService.deleteEvent(id).subscribe();
  }


}
