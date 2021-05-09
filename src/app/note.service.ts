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
    NOTES.some((item, index) => { if (item === note) { NOTES.splice(index, 1); return true; } else return false; });
  }

  addNote(note: Note): void {
    NOTES.push({title: note.title, text: note.text});
  }
}
