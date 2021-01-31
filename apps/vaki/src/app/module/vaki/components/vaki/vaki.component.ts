import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vaki-challenge-vaki',
  templateUrl: './vaki.component.html',
  styleUrls: ['./vaki.component.scss']
})
export class VakiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    console.log("siiiiii")
    el.scrollIntoView({behavior: 'smooth'});
}
}
