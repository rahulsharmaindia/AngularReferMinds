import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferraljobsComponent } from './referraljobs.component';

describe('ReferraljobsComponent', () => {
  let component: ReferraljobsComponent;
  let fixture: ComponentFixture<ReferraljobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferraljobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferraljobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
