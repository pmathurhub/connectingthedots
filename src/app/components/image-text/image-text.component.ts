import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StyleOptions } from '../button/button.component';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class ImageTextComponent implements OnInit {

  @Input() imageSrc: string = '';
  @Input() imageOrder: number = 0;
  @Input() heading: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  buttonStyleOptions: StyleOptions = {
    class: 'border'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

}
