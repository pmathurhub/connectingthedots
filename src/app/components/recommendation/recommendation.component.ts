import { Component, OnInit } from '@angular/core';
import { Tab } from '../tabs/tabs.component';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  tabsData: Tab[] = [];
  constructor() { }

  ngOnInit(): void {
    this.tabsData.push({heading: 'Tab heading 1'});
    this.tabsData.push({heading: 'Tab heading 2'});
    this.tabsData.push({heading: 'Tab heading 3'});
    this.tabsData.push({heading: 'Tab heading 4'});
  }

}
