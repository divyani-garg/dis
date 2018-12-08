<<<<<<< HEAD
import { Time } from '@angular/common';
=======
import { Time } from "../../../node_modules/@angular/common";
>>>>>>> 3a816257cf09446d1e42d4fad83d7cc79209aaf1

export class SemesterTimetable {
  session: String;
  year: String;
  semester: String;
  subjectCode: String;
  from: Time;
  to: Time;
  day: String;
  type: String;
  faculty_1: String;
  faculty_2: String;
  faculty_3: String;
  ta: String;
  batch: String;
  location: String;
  with_effect_from: Date;
  pdf_id: String;
}

