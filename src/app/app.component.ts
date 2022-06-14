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
    this.radioOptionFrom = new FormControl();
    this.radioOptionTo = new FormControl('');

    this.radioGroups = [this.radioOptionFrom, this.radioOptionTo];

    this.fields.forEach((field) => {
      this.registryData.addControl(
        field,
        new FormControl(localStorage.getItem(field), [
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

  persist(e: Event | any, key: string) {
    localStorage.setItem(key, e.path[0].value);
  }

  clearMemory() {
    localStorage.clear();
    this.registryData.reset();
  }

  mov(src: FormControl | any, dest: FormControl | any) {
    let source = src.value;
    let destination = dest.value;

    this.registryData
      .get(destination)
      ?.setValue(this.registryData.get(source)?.value);

    this.registryData.get(destination)?.updateValueAndValidity();
  }

  xchg(src: FormControl | any, dest: FormControl | any) {
    let source = src.value;
    let destination = dest.value;

    let values = [
      this.registryData.get(source)?.value,
      this.registryData.get(destination)?.value,
    ];

    this.registryData.get(destination)?.setValue(values[0]);

    this.registryData.get(source)?.setValue(values[1]);

    this.registryData.get(destination)?.updateValueAndValidity();
    this.registryData.get(source)?.updateValueAndValidity();
  }

  show() {
    console.log(this.registryData.value);
    console.log('OD', this.radioOptionFrom.value);
    console.log('OD', this.radioOptionFrom);
    console.log('DO', this.radioOptionTo.value);
    console.log('DO', this.radioOptionTo);
  }
}
