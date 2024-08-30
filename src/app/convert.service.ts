import { Injectable } from '@angular/core';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  convert: any;

  constructor() {
    this.convert = configureMeasurements(allMeasures);
  }
}
