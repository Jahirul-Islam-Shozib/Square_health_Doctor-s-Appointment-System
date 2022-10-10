import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() docDetails: any;
  @Input() index!: number;
  constructor(private router: Router, private doctorsService: DoctorsService) {}

  ngOnInit(): void {}
  onMakeAppointment() {
    this.router.navigate(['/appointment', this.index]);
    //this.router.navigateByUrl('/appointment', { state: docAppointment });
  }
}
