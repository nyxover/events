import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../Model/eventmodel';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<any[]>(this.eventsUrl)
      .pipe(
        map(events => events.map(event => ({
          id: event.id,
          title: event.title,
          time: event.time,
          type: event.type
        })))
      );
  }
}
