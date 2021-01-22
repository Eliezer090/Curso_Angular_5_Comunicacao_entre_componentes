import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenClientsComponent } from './iten-clients.component';

describe('ItenClientsComponent', () => {
  let component: ItenClientsComponent;
  let fixture: ComponentFixture<ItenClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItenClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItenClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
