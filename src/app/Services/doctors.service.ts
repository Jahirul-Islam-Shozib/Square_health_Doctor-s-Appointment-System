import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  

  constructor() {}

  public rawData = [
    {
      name: 'Dr. John Doe',
      org: 'Kings London Hospital',
      imagePath:
        'https://img.freepik.com/premium-photo/pretty-doctor-happy-be-hospital_23-2148728330.jpg?w=2000',
      title: 'Associate',
      degree: 'MBBS, FCPS',
      availibility: {
        sun: '10:00 AM - 06:00 PM',
        wed: '06:00 PM - 09:00 PM',
      },
      visitDurationInMin: 15,
    },
    {
      name: 'Dr. Mary Ellis',
      org: 'ABC Hospital',
      imagePath:
        'https://img.freepik.com/premium-photo/pretty-doctor-happy-be-hospital_23-2148728330.jpg?w=2000',
      title: 'Associate',
      degree: 'MBBS, FCPS',
      availibility: {
        sun: '10:00 AM - 06:00 PM',
        mon: '09:00 PM - 11:00 PM',
        thu: '11:00 AM - 02:00 PM',
      },
      visitDurationInMin: 15,
    },
  ];

  temObj = JSON.stringify(this.rawData);

  doctorsList = JSON.parse(this.temObj);

  getDoctorsList() {
    //console.log(this.doctorsList);
    return this.doctorsList.slice();
  }
}
