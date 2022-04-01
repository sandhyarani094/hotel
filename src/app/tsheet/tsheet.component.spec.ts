import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsheetComponent } from './tsheet.component';

describe('TsheetComponent', () => {
  let component: TsheetComponent;
  let fixture: ComponentFixture<TsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
