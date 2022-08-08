import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoOthersComponent } from './nuevo-others.component';

describe('NuevoOthersComponent', () => {
  let component: NuevoOthersComponent;
  let fixture: ComponentFixture<NuevoOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
