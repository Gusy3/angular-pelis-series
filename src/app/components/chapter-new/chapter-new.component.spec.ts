import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterNewComponent } from './chapter-new.component';

describe('ChapterNewComponent', () => {
  let component: ChapterNewComponent;
  let fixture: ComponentFixture<ChapterNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
