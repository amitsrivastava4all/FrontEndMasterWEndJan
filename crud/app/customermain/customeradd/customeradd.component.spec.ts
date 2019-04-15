import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraddComponent } from './customeradd.component';

describe('CustomeraddComponent', () => {
  let component: CustomeraddComponent;
  let fixture: ComponentFixture<CustomeraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
