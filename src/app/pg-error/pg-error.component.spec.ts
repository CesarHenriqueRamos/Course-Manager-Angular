import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgErrorComponent } from './pg-error.component';

describe('PgErrorComponent', () => {
  let component: PgErrorComponent;
  let fixture: ComponentFixture<PgErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
