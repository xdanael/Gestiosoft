import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciEnteComponent } from './inserisci-ente.component';

describe('InserisciEnteComponent', () => {
  let component: InserisciEnteComponent;
  let fixture: ComponentFixture<InserisciEnteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciEnteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciEnteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
