import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  fields: string[] = ['AX', 'BX', 'CX', 'DX'];

  data: { [key: string]: string } = { AX: '', BX: '', CX: '', DX: '' };
  registryData = new FormGroup({});

  constructor() {
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

  onChange(event: string) {
    if (/[0-9A-Fa-f]{6}/g.test(event)) {
      console.log('git');
    } else {
      console.log('bad');
    }
    console.log(event);
  }

  show() {
    console.log(this.registryData.value);
  }
}
