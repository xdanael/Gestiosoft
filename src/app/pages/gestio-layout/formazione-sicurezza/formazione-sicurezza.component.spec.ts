import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormazioneSicurezzaComponent } from './formazione-sicurezza.component';

describe('FormazioneSicurezzaComponent', () => {
  let component: FormazioneSicurezzaComponent;
  let fixture: ComponentFixture<FormazioneSicurezzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormazioneSicurezzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormazioneSicurezzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
