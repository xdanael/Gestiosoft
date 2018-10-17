import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaRisorsaComponent } from './cerca-risorsa.component';

describe('CercaRisorsaComponent', () => {
  let component: CercaRisorsaComponent;
  let fixture: ComponentFixture<CercaRisorsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercaRisorsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaRisorsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
