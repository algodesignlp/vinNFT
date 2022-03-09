import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { VinService } from '../vin.service';
import { Vin } from '../vin';


@Component({
  selector: 'app-vin-detail',
  templateUrl: './vin-detail.component.html',
  styleUrls: ['./vin-detail.component.css']
})
export class VinDetailComponent implements OnInit {

  @Input() vin?: Vin;
  constructor(
    private route: ActivatedRoute,
    private vinService: VinService,
    private location: Location
  ) { }

  ngOnInit(): void {

  this.getVin();
  }

  getVin(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vinService.getVin(id)
    .subscribe(vin => this.vin = vin)
  }

}  
