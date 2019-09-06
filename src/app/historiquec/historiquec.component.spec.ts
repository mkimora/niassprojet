import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquecComponent } from './historiquec.component';

describe('HistoriquecComponent', () => {
  let component: HistoriquecComponent;
  let fixture: ComponentFixture<HistoriquecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
