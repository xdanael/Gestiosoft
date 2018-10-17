import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaPianoFormativoComponent } from './cerca-piano-formativo.component';

describe('CercaPianoFormativoComponent', () => {
  let component: CercaPianoFormativoComponent;
  let fixture: ComponentFixture<CercaPianoFormativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercaPianoFormativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaPianoFormativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
