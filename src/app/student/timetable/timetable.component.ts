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
  columnHeaders: any[];
  rowHeaders: String[];
  tabledata: String[];
  lec: any[];
  schedule: any[];
  dayschedule: any[];
  slots: any[];
  lectures: any[];
  timeslots: any[];

  constructor(private timetable: TimetableService) { }
  ngOnInit() {
    this.tt = this.timetable.getTimetable()
    .subscribe( data => {
    this.lec = data;
    // tslint:disable-next-line:max-line-length
    this.columnHeaders = [{day: 'Days', colspanValue: 1}, {day: 'Monday', colspanValue: 1}, {day: 'Tuesday', colspanValue: 1}, {day: 'Wednesday', colspanValue: 1}, {day: 'Thursday', colspanValue: 1}, {day: 'Friday', colspanValue: 1}];
    this.timeslots = [];
    console.log(data);
    this.schedule = [];
    for (let a = 0; a < this.lec.length; a++) {
      if (!(this.timeslots.includes(this.lec[a].from))) {
        this.timeslots.push(this.lec[a].from);
      }
    }
    console.log(this.timeslots.sort((n1, n2) => {
      return this.tsort(n1, n2); }));
    for (let i = 0; i < this.timeslots.length; i++) {
      this.dayschedule = [];
      for (let k = 0; k < this.columnHeaders.length; k++) {
        this.lectures = [];
        for (let j = 0; j < this.lec.length; j++) {
          if ( this.lec[j].from === this.timeslots[i] && k === 0 && this.lec[j].type !== 'Lab') {
            this.lectures = [String(this.lec[j].from) + '-' + String(this.lec[j].to)];
          } else if (this.lec[j].from === this.timeslots[i] && this.lec[j].day === this.columnHeaders[k].day) {
            if (!(this.lectures.includes(this.lec[j]))) {
              // tslint:disable-next-line:max-line-length
                this.lectures.push(this.lec[j]);
            }
          }
        }
        this.dayschedule.push(this.lectures);
        if (this.lectures.length > this.columnHeaders[k].colspanValue) {
          this.columnHeaders[k].colspanValue = this.lectures.length;
        }
      }
      this.schedule.push(this.dayschedule);
    }
    console.log(this.schedule);
    console.log(this.columnHeaders);
    });
  }

  tconv(n1) {
    let t1 = 0;
    if (Number(n1.slice(0, 2)) > 7) {
      t1 = Number(n1.slice(0, 2)) * 100 + Number(n1.slice(3, 5));
    } else {
      t1 = Number(n1.slice(0, 2) + 12) * 100 + Number(n1.slice(3, 5));
    }
    return t1;
  }

 tsort(n1, n2) {
   if ((this.tconv(n1) - this.tconv(n2)) > 0) {
    return 1;
   } else if ((this.tconv(n1) - this.tconv(n2)) < 0) {
    return -1;
   } else {
    return 0;
   }
 }

 isObject(val) {
   return typeof val === 'object';
 }

 isString(val) {
   return typeof val === 'string';
 }
}
