import { Time } from '@angular/common';

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

