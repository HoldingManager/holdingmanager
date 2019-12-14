import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuteComponent } from './proute.component';

describe('ProuteComponent', () => {
  let component: ProuteComponent;
  let fixture: ComponentFixture<ProuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
