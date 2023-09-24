import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarContasComponent } from './salvar-contas.component';

describe('SalvarContasComponent', () => {
  let component: SalvarContasComponent;
  let fixture: ComponentFixture<SalvarContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarContasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalvarContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
