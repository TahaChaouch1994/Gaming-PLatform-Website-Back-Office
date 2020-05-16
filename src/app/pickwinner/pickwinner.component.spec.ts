import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickwinnerComponent } from './pickwinner.component';

describe('PickwinnerComponent', () => {
  let component: PickwinnerComponent;
  let fixture: ComponentFixture<PickwinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickwinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickwinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
