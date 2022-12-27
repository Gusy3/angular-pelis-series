import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaNewComponent } from './film-new.component';

describe('PeliculaNewComponent', () => {
  let component: PeliculaNewComponent;
  let fixture: ComponentFixture<PeliculaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
