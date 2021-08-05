import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeAreaComponent } from './cidade-area.component';

describe('CidadeAreaComponent', () => {
  let component: CidadeAreaComponent;
  let fixture: ComponentFixture<CidadeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
