import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdequatTransComponent } from './adequat-trans.component';

describe('AdequatTransComponent', () => {
  let component: AdequatTransComponent;
  let fixture: ComponentFixture<AdequatTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdequatTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdequatTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
