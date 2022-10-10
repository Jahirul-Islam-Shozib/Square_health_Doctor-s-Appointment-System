import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.css'],
})
export class UserDetailsDialogComponent implements OnInit {
  paitentDetailsForm!: FormGroup;
  finalTime!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public paitentData: any) {}

  ngOnInit(): void {
    this.finalTime = `${this.paitentData.slot.start.getHours()}:${this.paitentData.slot.start.getMinutes()} - ${this.paitentData.slot.end.getHours()}:${this.paitentData.slot.end.getMinutes()}`;

    // console.log(this.paitentData);

    if (this.paitentData) {
      this.formData(this.paitentData);
    }
  }

  formData(data: any) {
    this.paitentDetailsForm = new FormGroup({
      name: new FormControl(null),
      number: new FormControl(null),
      reason: new FormControl(null),
      date: new FormControl(this.finalTime),
    });
  }

  onSubmit() {
    console.log(this.paitentDetailsForm.value);
  }
  onCancel() {
    this.paitentDetailsForm.reset();
  }
}
