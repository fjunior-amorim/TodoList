import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadersComponent } from './haders.component';

describe('HadersComponent', () => {
  let component: HadersComponent;
  let fixture: ComponentFixture<HadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
