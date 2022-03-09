import { Injectable } from '@angular/core';
import { Vin } from './vin';
import { VINS } from './mock-vins';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VinService {

  constructor(
    private messageService: MessageService
  ) { }

  getVins(): Observable<Vin[]> {
    const vins = of(VINS);
    this.messageService.add('VinService: fetched Vins');
    return vins;
  }

  getVin(id: number): Observable<Vin> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const vin = VINS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(vin);
  }
}
