import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineriaComponent } from './mineria.component';

describe('MineriaComponent', () => {
  let component: MineriaComponent;
  let fixture: ComponentFixture<MineriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineriaComponent]
    });
    fixture = TestBed.createComponent(MineriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
