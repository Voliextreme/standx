import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteAdComponent } from './promote-ad.component';

describe('PromoteAdComponent', () => {
  let component: PromoteAdComponent;
  let fixture: ComponentFixture<PromoteAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
