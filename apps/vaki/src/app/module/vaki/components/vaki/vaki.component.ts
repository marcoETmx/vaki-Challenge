import { Component, OnInit } from '@angular/core';
import { VakiService } from 'apps/vaki/src/app/core/services/entity/vaki.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vaki-challenge-vaki',
  templateUrl: './vaki.component.html',
  styleUrls: ['./vaki.component.scss'],
})
export class VakiComponent implements OnInit {

  vaki$: Observable<>

  constructor(private vakiServices: VakiService) {}

  ngOnInit(): void {
    vaki$ = this.vakiServices.getVaki()
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
