import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeDoneComponent } from './commande-done.component';

describe('CommandeDoneComponent', () => {
  let component: CommandeDoneComponent;
  let fixture: ComponentFixture<CommandeDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
