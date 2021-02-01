import { Component, OnInit } from '@angular/core';
import { VakiService } from 'apps/vaki/src/app/core/services/entity/vaki.service';
import { Observable } from 'rxjs';
import { Vaki } from '@vaki-challenge/models';

@Component({
  selector: 'vaki-challenge-vaki',
  templateUrl: './vaki.component.html',
  styleUrls: ['./vaki.component.scss'],
})
export class VakiComponent implements OnInit {

  vaki$: Observable<Vaki>

  constructor(private vakiServices: VakiService) {}

  ngOnInit(): void {
    this.vaki$ = this.vakiServices.getVaki('sa')
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
