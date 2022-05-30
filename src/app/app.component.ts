import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RadioChange } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  fields: string[] = ['AX', 'BX', 'CX', 'DX'];

  registryData = new FormGroup({});
  radioGroups: FormControl[];
  radioOptionFrom: FormControl;
  radioOptionTo: FormControl;
  radioDestinations: string[] = ['OD', 'DO'];

  constructor() {
    this.radioOptionFrom = new FormControl('');
    this.radioOptionTo = new FormControl('');

    this.radioGroups = [this.radioOptionFrom, this.radioOptionTo];

    this.fields.forEach((field) => {
      this.registryData.addControl(
        field,
        new FormControl('', [
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(6),
          Validators.pattern(/[0-9A-Fa-f]{6}/g),
        ])
      );
    });
  }

  ngOnInit() {}

  onRadioChange(event: RadioChange, index: number) {
    index == 0
      ? this.radioOptionFrom.setValue(event.value)
      : this.radioOptionTo.setValue(event.value);
  }

  mov(source: FormControl | any, destination: FormControl | any) {
    let sourceHolder = source.value;
    let destinationHolder = destination.value;
    console.log(source, destination);

    this.registryData
      .get(destinationHolder)
      ?.setValue(this.registryData.get(sourceHolder)?.value);

    this.registryData.get(destinationHolder)?.updateValueAndValidity();
  }

  xchg(source: FormControl | any, destination: FormControl | any) {
    let sourceHolder = source.value;
    let destinationHolder = destination.value;
    console.log(source, destination);

    this.registryData
      .get(destinationHolder)
      ?.setValue(this.registryData.get(sourceHolder)?.value);

    this.registryData
      .get(sourceHolder)
      ?.setValue(this.registryData.get(destinationHolder)?.value);

    this.registryData.get(destinationHolder)?.updateValueAndValidity();
    this.registryData.get(sourceHolder)?.updateValueAndValidity();
  }

  show() {
    console.log(this.registryData.value);
    console.log('OD', this.radioOptionFrom.value);
    console.log('OD', this.radioOptionFrom);
    console.log('DO', this.radioOptionTo.value);
    console.log('DO', this.radioOptionTo);
  }
}
