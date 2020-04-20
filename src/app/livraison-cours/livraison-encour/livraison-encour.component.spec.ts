import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonEncourComponent } from './livraison-encour.component';

describe('LivraisonEncourComponent', () => {
  let component: LivraisonEncourComponent;
  let fixture: ComponentFixture<LivraisonEncourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonEncourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonEncourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
