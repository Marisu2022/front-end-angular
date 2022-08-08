import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProjectsComponent } from './nuevo-projects.component';

describe('NuevoProjectsComponent', () => {
  let component: NuevoProjectsComponent;
  let fixture: ComponentFixture<NuevoProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
