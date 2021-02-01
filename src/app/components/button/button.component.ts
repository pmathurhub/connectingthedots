import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface StyleOptions {
  class?: any;
}


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = '';
  @Input() styleOptions: StyleOptions = {};
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { } 

  ngOnInit(): void {
  }

  buttonClick() {
    this.onButtonClick.emit();
  }

}
