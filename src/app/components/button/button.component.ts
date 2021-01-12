import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = '';
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { } 

  ngOnInit(): void {
  }

  buttonClick() {
    this.onButtonClick.emit();
  }

}
