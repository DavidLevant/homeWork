import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureServiceService {
  c: number;
  f:number;

  constructor() {
    this.c = 6;
  }
  getConversion(){
    this.f = (this.c*9/5) +32
    return this.f;
  }

}
