import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonNewComponent } from './season-new.component';

describe('SeasonNewComponent', () => {
  let component: SeasonNewComponent;
  let fixture: ComponentFixture<SeasonNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
