import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RspvSuccessComponent } from './rspv-success.component';

describe('RspvSuccessComponent', () => {
  let component: RspvSuccessComponent;
  let fixture: ComponentFixture<RspvSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RspvSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RspvSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
