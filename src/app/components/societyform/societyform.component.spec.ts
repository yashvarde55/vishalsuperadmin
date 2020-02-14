import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyformComponent } from './societyform.component';

describe('SocietyformComponent', () => {
  let component: SocietyformComponent;
  let fixture: ComponentFixture<SocietyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
