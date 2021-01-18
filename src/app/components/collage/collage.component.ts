import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {

  @Input() heading: string = '';
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
