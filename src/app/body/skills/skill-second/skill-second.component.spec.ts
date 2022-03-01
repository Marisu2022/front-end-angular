import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSecondComponent } from './skill-second.component';

describe('SkillSecondComponent', () => {
  let component: SkillSecondComponent;
  let fixture: ComponentFixture<SkillSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
