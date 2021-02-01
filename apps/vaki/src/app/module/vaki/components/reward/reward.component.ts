import { Component, Input, OnInit } from '@angular/core';
import { VakiReward } from '@vaki-challenge/models';

@Component({
  selector: 'vaki-challenge-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  @Input() vakiReward: VakiReward;

  constructor() { }

  ngOnInit(): void {
  }

}
