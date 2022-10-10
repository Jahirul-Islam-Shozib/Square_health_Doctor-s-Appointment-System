import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {
  MatCalendarCellClassFunction,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CalenderComponent implements OnInit {
  @Input() docDet: any;
  @Output() slotEvent = new EventEmitter<any>();
  constructor() {}

  days: Array<any> = [];
  map: any;
  events: any;
  str!: string;

  startHour!: number;
  startMin!: number;
  startMod!: string;
  endHour!: number;
  endMin!: number;
  endMod!: string;
  slots: any[] = [];

  ngOnInit() {
    this.getCurrentDoctorsDay(this.docDet);
  }

  myFilter: DateFilterFn<Date | null> = (date: Date | null) => {
    // Implementation
    var x = date?.getDay();
    if (x != null) {
      return this.days.includes(x);
    }
    return false;
  };

  getDay(dayStr: string) {
    if (dayStr == 'sun') return 0;
    else if (dayStr == 'mon') return 1;
    else if (dayStr == 'tue') return 2;
    else if (dayStr == 'wed') return 3;
    else if (dayStr == 'thu') return 4;
    else if (dayStr == 'fri') return 5;
    else if (dayStr == 'sat') return 6;
    return 0;
  }

  getCurrentDoctorsDay(doctorsDetails: any) {
    if (doctorsDetails && doctorsDetails.availibility) {
      for (const key in doctorsDetails.availibility) {
        let day = this.getDay(key);
        this.days.push(day);
        //console.log(this.days);
      }
    }
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.slots = [];
    this.events = event;

    let nwDay = this.events.value.getDay();
    this.str = this.getAvailableDOctorsTime(nwDay);
    this.getSlotTime(this.str);
    this.slotEvent.emit(this.slots);
    // console.log(this.slots);
  }

  getAvailableDOctorsTime(nwDay: number) {
    if (nwDay === 0) return this.docDet.availibility['sun'];
    else if (nwDay === 1) return this.docDet.availibility['mon'];
    else if (nwDay === 2) return this.docDet.availibility['tue'];
    else if (nwDay === 3) return this.docDet.availibility['wed'];
    else if (nwDay === 4) return this.docDet.availibility['thu'];
    else if (nwDay === 5) return this.docDet.availibility['fri'];
    else if (nwDay === 6) return this.docDet.availibility['sat'];

    return 0;
  }
  getSlotTime(str: string) {
    this.startMin = parseInt(str[3] + str[4]);
    this.startMod = str[6] + str[7];
    if (this.startMod === 'PM') {
      this.startHour = parseInt(str[0] + str[1]) + 12;
    } else {
      this.startHour = parseInt(str[0] + str[1]);
    }
    // console.log(this.startHour);
    this.endMin = parseInt(str[14] + str[15]);
    this.endMod = str[17] + str[18];
    // console.log(this.endMod);

    if (this.endMod === 'PM') {
      this.endHour = parseInt(str[11] + str[12]) + 12;
    } else {
      this.endHour = parseInt(str[11] + str[12]);
    }

    var stratTime = new Date(
      this.events.value.getFullYear(),
      this.events.value.getMonth(),
      this.events.value.getDate(),
      this.startHour,
      this.startMin
    );
    var endTime = new Date(
      this.events.value.getFullYear(),
      this.events.value.getMonth(),
      this.events.value.getDate(),
      this.endHour,
      this.endMin
    );
    // console.log(stratTime, endTime);
    this.getSlot(stratTime, endTime);
  }
  getSlot(st: Date, et: Date) {
    var nwStartT = st;
    while (nwStartT < et) {
      var temp = {
        start: new Date(nwStartT),
        end: new Date(
          nwStartT.setMinutes(
            nwStartT.getMinutes() + this.docDet.visitDurationInMin
          )
        ),
      };

      this.slots.push(temp);
    }
  }
}
