import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentrequestsadmindetailComponent } from './tournamentrequestsadmindetail.component';

describe('TournamentrequestsadmindetailComponent', () => {
  let component: TournamentrequestsadmindetailComponent;
  let fixture: ComponentFixture<TournamentrequestsadmindetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentrequestsadmindetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentrequestsadmindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
