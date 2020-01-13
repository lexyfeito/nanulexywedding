import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RspvComponent } from './rspv.component';

describe('RspvComponent', () => {
  let component: RspvComponent;
  let fixture: ComponentFixture<RspvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RspvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RspvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
