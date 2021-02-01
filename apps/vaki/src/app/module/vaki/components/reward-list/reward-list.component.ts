import { Component, OnInit } from '@angular/core';
import { VakiReward } from '@vaki-challenge/models';
import { VakiService } from 'apps/vaki/src/app/core/services/entity/vaki.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'vaki-challenge-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.scss']
})
export class RewardListComponent implements OnInit {

  vakiRewards$: Observable<VakiReward[]>

  constructor(private vakiServices: VakiService) { }

  ngOnInit(): void {
    this.vakiRewards$ = this.vakiServices.getvakiReward('0Uz911WebTsehGIpNypW')

  }

}
