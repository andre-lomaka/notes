import { Component, OnInit } from '@angular/core';

import { Note } from '../note';
import { NEW_NOTE } from '../new-note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];
  selectedNote?: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
    this.selectedNote = NEW_NOTE;
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

}
