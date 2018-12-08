import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

<<<<<<< HEAD
  private baseUrl = 'http://localhost:8080/dis';
=======
  private baseUrl = 'http://localhost:8080/student';
>>>>>>> 3a816257cf09446d1e42d4fad83d7cc79209aaf1

  constructor(private http: HttpClient) { }

  getTimetable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/student_timetable`);
  }
}
