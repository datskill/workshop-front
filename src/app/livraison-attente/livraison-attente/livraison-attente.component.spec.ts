import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonAttenteComponent } from './livraison-attente.component';

describe('LivraisonAttenteComponent', () => {
  let component: LivraisonAttenteComponent;
  let fixture: ComponentFixture<LivraisonAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
