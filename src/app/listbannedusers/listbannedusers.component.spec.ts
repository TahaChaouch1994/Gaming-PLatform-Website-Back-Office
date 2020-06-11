import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbannedusersComponent } from './listbannedusers.component';

describe('ListbannedusersComponent', () => {
  let component: ListbannedusersComponent;
  let fixture: ComponentFixture<ListbannedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbannedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbannedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
