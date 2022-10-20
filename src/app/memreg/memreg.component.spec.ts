import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemregComponent } from './memreg.component';

describe('MemregComponent', () => {
  let component: MemregComponent;
  let fixture: ComponentFixture<MemregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
