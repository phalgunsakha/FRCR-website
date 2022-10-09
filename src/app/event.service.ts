import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private_eventsUrl = "http://localhost:3000/api/events";
  private_specialEventsUrl = "http://localhost:3000/api/special";
  
  constructor() { }


}

