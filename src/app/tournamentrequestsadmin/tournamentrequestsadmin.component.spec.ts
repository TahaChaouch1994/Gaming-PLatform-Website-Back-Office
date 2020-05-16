import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentrequestsadminComponent } from './tournamentrequestsadmin.component';

describe('TournamentrequestsadminComponent', () => {
  let component: TournamentrequestsadminComponent;
  let fixture: ComponentFixture<TournamentrequestsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentrequestsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentrequestsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
