import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaqueModalComponent } from './saque-modal.component';

describe('SaqueModalComponent', () => {
  let component: SaqueModalComponent;
  let fixture: ComponentFixture<SaqueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaqueModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaqueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
