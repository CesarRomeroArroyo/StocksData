import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksDataComponent } from './stocks-data.component';

describe('StocksDataComponent', () => {
  let component: StocksDataComponent;
  let fixture: ComponentFixture<StocksDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
