import { Component, OnInit, Input, TemplateRef } from '@angular/core';
@Component({
  selector: 'base-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  @Input() templateRef: TemplateRef<any>;
  
  @Input() componentName: string;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
