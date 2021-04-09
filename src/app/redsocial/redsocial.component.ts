import { Component, OnInit } from '@angular/core';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-redsocial',
  templateUrl: './redsocial.component.html',
  styleUrls: ['./redsocial.component.scss']
})
export class RedsocialComponent extends WindowComponent implements OnInit {

  componentName: String;

  constructor() {
    super()
    this.componentName = 'Red Social'
  }

  ngOnInit(): void {
  }

}
