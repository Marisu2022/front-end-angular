import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillThirdComponent } from './skill-third.component';

describe('SkillThirdComponent', () => {
  let component: SkillThirdComponent;
  let fixture: ComponentFixture<SkillThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
