import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciPianoFormativoComponent } from './inserisci-piano-formativo.component';

describe('InserisciPianoFormativoComponent', () => {
  let component: InserisciPianoFormativoComponent;
  let fixture: ComponentFixture<InserisciPianoFormativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciPianoFormativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciPianoFormativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
