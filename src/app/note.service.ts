import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    const notes = of(NOTES);
    return notes;
  }

  deleteNote(note: Note): void {
    NOTES.forEach((item, index) => { if (item === note) NOTES.splice(index, 1) });
  }
}
