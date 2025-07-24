import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartApplicationComponent } from './start-application.component';

describe('StartApplicationComponent', () => {
  let component: StartApplicationComponent;
  let fixture: ComponentFixture<StartApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartApplicationComponent]
    });
    fixture = TestBed.createComponent(StartApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
