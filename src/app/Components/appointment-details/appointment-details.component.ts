import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { UserDetailsDialogComponent } from '../user-details-dialog/user-details-dialog.component';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css'],
})
export class AppointmentDetailsComponent implements OnInit {
  index!: number;
  doctorDetails: any;
  doctorList: any;
  availableSlots: Array<any> = [];
  // availableSlots:

  constructor(
    private activatedRoute: ActivatedRoute,
    private doctorsService: DoctorsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.doctorList = this.doctorsService.getDoctorsList();
    this.activatedRoute.params.subscribe((x) => {
      this.index = x['id'];
      this.getCurrentDoctorDetails();
    });
  }

  getCurrentDoctorDetails() {
    if (this.doctorList.length > this.index) {
      this.doctorDetails = this.doctorList[this.index];
    }
  }
  addAvailableSlots(nwSlot: any) {
    this.availableSlots = nwSlot;
    console.log(this.availableSlots);
  }
  openDialog(slot: any) {
    const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
      width: '400px',
      data: { slot },
    });
  }
}
