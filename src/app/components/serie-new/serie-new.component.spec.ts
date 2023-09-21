import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieNewComponent } from './serie-new.component';

describe('SerieNewComponent', () => {
  let component: SerieNewComponent;
  let fixture: ComponentFixture<SerieNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
