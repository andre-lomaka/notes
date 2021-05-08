import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteModifyComponent } from './note-modify.component';

describe('NoteModifyComponent', () => {
  let component: NoteModifyComponent;
  let fixture: ComponentFixture<NoteModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
