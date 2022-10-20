import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableclaimComponent } from './availableclaim.component';

describe('AvailableclaimComponent', () => {
  let component: AvailableclaimComponent;
  let fixture: ComponentFixture<AvailableclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
