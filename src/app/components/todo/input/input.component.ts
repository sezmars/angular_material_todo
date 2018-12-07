import {Component, EventEmitter, Output} from '@angular/core';
import * as moment from 'moment';
import {TodoBase} from '../../../models/Todo';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  public title = '';
  @Output() public add = new EventEmitter<TodoBase>();

  constructor() {}

  public onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.title) {
        this.add.emit(
          {
            complete: false,
            title: this.title,
            date: moment(new Date(), 'YYYY-MM-DD HH:mm'),
          } as TodoBase);
        this.title = '';
      }
    }
  }
}
