import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStudiesComponent } from './table-studies.component';

describe('TableStudiesComponent', () => {
  let component: TableStudiesComponent;
  let fixture: ComponentFixture<TableStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
