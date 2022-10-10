import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  doctorsList: any;
  constructor(private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.doctorsList = this.doctorsService.getDoctorsList();
  }
}
