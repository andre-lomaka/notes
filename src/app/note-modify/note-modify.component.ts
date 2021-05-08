import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NEW_NOTE } from '../new-note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-modify',
  templateUrl: './note-modify.component.html',
  styleUrls: ['./note-modify.component.css']
})
export class NoteModifyComponent implements OnInit {
  @Input() note?: Note;
  new_note: Note = NEW_NOTE;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  deleteNote(): void {
    this.noteService.deleteNote(this.note);
    this.note = this.new_note;
  }

  addNote(): void {
    this.noteService.addNote(this.note);
  }
}
