import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquerComponent } from './bloquer.component';

describe('BloquerComponent', () => {
  let component: BloquerComponent;
  let fixture: ComponentFixture<BloquerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloquerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
