import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-modify',
  templateUrl: './note-modify.component.html',
  styleUrls: ['./note-modify.component.css']
})
export class NoteModifyComponent implements OnInit {
  @Input() note?: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
    this.note = null;
  }
}
