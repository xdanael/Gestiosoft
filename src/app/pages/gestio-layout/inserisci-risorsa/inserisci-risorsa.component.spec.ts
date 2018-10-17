import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciRisorsaComponent } from './inserisci-risorsa.component';

describe('InserisciRisorsaComponent', () => {
  let component: InserisciRisorsaComponent;
  let fixture: ComponentFixture<InserisciRisorsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciRisorsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciRisorsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
