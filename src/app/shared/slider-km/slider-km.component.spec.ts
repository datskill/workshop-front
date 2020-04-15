import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderKmComponent } from './slider-km.component';

describe('SliderKmComponent', () => {
  let component: SliderKmComponent;
  let fixture: ComponentFixture<SliderKmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderKmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderKmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
