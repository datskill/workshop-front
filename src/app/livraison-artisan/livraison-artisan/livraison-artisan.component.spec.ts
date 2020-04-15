import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonArtisanComponent } from './livraison-artisan.component';

describe('LivraisonArtisanComponent', () => {
  let component: LivraisonArtisanComponent;
  let fixture: ComponentFixture<LivraisonArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
