import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarClienteComponent } from './salvar-cliente.component';

describe('SalvarClienteComponent', () => {
  let component: SalvarClienteComponent;
  let fixture: ComponentFixture<SalvarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalvarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
