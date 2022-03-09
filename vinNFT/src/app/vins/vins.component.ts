import { Component, OnInit } from '@angular/core';
import { Vin } from '../vin';
import { VINS } from '../mock-vins';
import { VinService } from '../vin.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-vins',
  templateUrl: './vins.component.html',
  styleUrls: ['./vins.component.css']
})
export class VinsComponent implements OnInit {

  vins: Vin[] = [];
 

  constructor(
    private vinService: VinService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getVins();
  }





  getVins(): void {

    this.vinService.getVins().
    subscribe(vins => this.vins = vins);
  }



}
