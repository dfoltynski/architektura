import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    document.querySelector('.bx--header__name--prefix')?.remove();
  }

  ngOnInit(): void {}
}
