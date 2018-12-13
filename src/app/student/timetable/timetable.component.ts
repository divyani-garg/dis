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
  tabledata: String[];
  lec: any[];
  schedule: any[];
  dayschedule: any[];
  slots: any[];
  lectures: any[];

  constructor(private timetable: TimetableService) { }

  ngOnInit() {
    this.tt = this.timetable.getTimetable()
    .subscribe( data => {
    this.lec = data;
    this.columnHeaders = ['Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(data);
    this.schedule = [];
    for (let i = 0; i < this.slots.length; i++) {
      this.dayschedule = [];
      for (let k = 0; k < this.columnHeaders.length; k++) {
        this.lectures = [];
        for (let j = 0; j < this.lec.length; j++) {
          if ( this.lec[j].slot === this.slots[i] && k === 0) {
            this.lectures = [String(this.lec[j].from) + '-' + String(this.lec[j].to)];
          } else if (this.lec[j].slot === this.slots[i] && this.lec[j].day === this.columnHeaders[k]) {
            if (!(this.lectures.includes(this.lec[j].subjectCode))) {
              // tslint:disable-next-line:max-line-length
                this.lectures.push(this.lec[j].subjectCode);
            }
          }
        }
        this.dayschedule.push(this.lectures);
      }
      this.schedule.push(this.dayschedule);
    }
    console.log(this.schedule);
    });
  }

}
