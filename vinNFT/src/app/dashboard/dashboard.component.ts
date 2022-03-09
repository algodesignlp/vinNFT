import { Component, OnInit } from '@angular/core';
import { Vin } from '../vin';
import { VinService } from '../vin.service';
import { PinataService } from '../pinata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vins: Vin[] = [];

  constructor(
    private vinService: VinService,
    private pinataService: PinataService

  ) { }

  ngOnInit(): void {
    this.getvins();
    this.pinataService.testPinataAuth();

  }

  getvins(): void {
    this.vinService.getVins()
      .subscribe(vins => this.vins = vins.slice(1, 5));
  }
}