import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaModalComponent } from './transferencia-modal.component';

describe('TransferenciaModalComponent', () => {
  let component: TransferenciaModalComponent;
  let fixture: ComponentFixture<TransferenciaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
