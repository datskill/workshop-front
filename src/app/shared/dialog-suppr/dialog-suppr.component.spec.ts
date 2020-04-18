import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSupprComponent } from './dialog-suppr.component';

describe('DialogSupprComponent', () => {
  let component: DialogSupprComponent;
  let fixture: ComponentFixture<DialogSupprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSupprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSupprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
