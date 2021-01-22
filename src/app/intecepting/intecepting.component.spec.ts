import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteceptingComponent } from './intecepting.component';

describe('InteceptingComponent', () => {
  let component: InteceptingComponent;
  let fixture: ComponentFixture<InteceptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteceptingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteceptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
