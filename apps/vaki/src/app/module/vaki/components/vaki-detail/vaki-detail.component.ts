import { Component, Input, OnInit } from '@angular/core';
import { Vaki } from '@vaki-challenge/models';

@Component({
  selector: 'vaki-challenge-vaki-detail',
  templateUrl: './vaki-detail.component.html',
  styleUrls: ['./vaki-detail.component.scss']
})
export class VakiDetailComponent implements OnInit {

  @Input() vaki: Vaki;

  constructor() { }

  ngOnInit(): void {
  }

}
