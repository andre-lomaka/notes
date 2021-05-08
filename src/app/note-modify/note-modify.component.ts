import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-modify',
  templateUrl: './note-modify.component.html',
  styleUrls: ['./note-modify.component.css']
})
export class NoteModifyComponent implements OnInit {
  @Input() note?: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
