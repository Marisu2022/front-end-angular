import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoExperienceComponent } from './nuevo-experience.component';

describe('NuevoExperienceComponent', () => {
  let component: NuevoExperienceComponent;
  let fixture: ComponentFixture<NuevoExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
