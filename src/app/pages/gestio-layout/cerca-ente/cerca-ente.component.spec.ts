import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaEnteComponent } from './cerca-ente.component';

describe('CercaEnteComponent', () => {
  let component: CercaEnteComponent;
  let fixture: ComponentFixture<CercaEnteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercaEnteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaEnteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
