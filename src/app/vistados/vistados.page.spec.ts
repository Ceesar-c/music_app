import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistadosPage } from './vistados.page';

describe('VistadosPage', () => {
  let component: VistadosPage;
  let fixture: ComponentFixture<VistadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
