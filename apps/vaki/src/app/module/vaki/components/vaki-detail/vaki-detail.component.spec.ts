import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiDetailComponent } from './vaki-detail.component';

describe('VakiDetailComponent', () => {
  let component: VakiDetailComponent;
  let fixture: ComponentFixture<VakiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
