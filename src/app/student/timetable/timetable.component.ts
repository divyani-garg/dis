import { Component, OnInit, Input } from '@angular/core';
import { SemesterTimetable } from '../../Model/semester-timetable.model';
import { TimetableService } from '../../API_Service/timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  @Input() tt: any;
  columnHeaders: String[];
  rowHeaders: String[];
  lec: any[];

  constructor(private timetable: TimetableService) { }

  ngOnInit() {
    this.tt = this.timetable.getTimetable()
    .subscribe( data => {
    this.lec = data;
    this.columnHeaders = ['Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    console.log(data);
    });
  }

}
