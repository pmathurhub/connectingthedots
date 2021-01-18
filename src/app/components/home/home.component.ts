import { Component, OnInit } from '@angular/core';
import { Tab } from '../tabs/tabs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabsData: Tab[] = [];
  constructor() { }

  ngOnInit(): void {
    this.tabsData.push({heading: 'Tab heading 1'});
    this.tabsData.push({heading: 'Tab heading 2'});
    this.tabsData.push({heading: 'Tab heading 3'});
    this.tabsData.push({heading: 'Tab heading 4'});
    console.log(this.tabsData);
  }

}
