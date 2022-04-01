import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsaComponent } from './nsa.component';

describe('NsaComponent', () => {
  let component: NsaComponent;
  let fixture: ComponentFixture<NsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
