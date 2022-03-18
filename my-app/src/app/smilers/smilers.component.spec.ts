import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmilersComponent } from './smilers.component';

describe('SmilersComponent', () => {
  let component: SmilersComponent;
  let fixture: ComponentFixture<SmilersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmilersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmilersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
