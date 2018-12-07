import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {TodoBase} from './models/Todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: TodoBase[] = [
      {
        id: 1, title: 'Cell', date: moment('2018-10-20 4:45', 'YYYY-MM-DD HH:mm'), complete: false,
      },
      {
        id: 2, title: 'Phone', date: moment('2018-10-20 5:30', 'YYYY-MM-DD HH:mm'), complete: false,
      },
      {
        id: 3, title: 'Price', date: moment('2018-10-20 6:30', 'YYYY-MM-DD HH:mm'), complete: false,
      },
      {
        id: 4, title: 'Car', date: moment('2018-10-20 7:30', 'YYYY-MM-DD HH:mm'), complete: false,
      },
      {
        id: 5, title: 'Documents', date: moment('2018-10-20 8:30', 'YYYY-MM-DD HH:mm'), complete: false,
      }
    ];
    const today: TodoBase[] = [
      {
        id: 6,
        title: 'Mirror',
        date: moment('2018-10-20 5:45', 'YYYY-MM-DD HH:mm'),
        timeSend: moment('2018-10-20 6:45', 'YYYY-MM-DD HH:mm'),
        complete: false,
      },
      {
        id: 7,
        title: 'Enable light', date: moment('2018-10-20 7:45', 'YYYY-MM-DD HH:mm'),
        timeSend: moment('2018-10-20 8:45', 'YYYY-MM-DD HH:mm'), complete: true,
      },
      {
        id: 8,
        title: 'Merry call', date: moment('2018-10-20 9:45', 'YYYY-MM-DD HH:mm'),
        timeSend: moment('2018-10-20 4:45', 'YYYY-MM-DD HH:mm'), complete: true,
      },
      {
        id: 9,
        title: 'Tree',
        date: moment('2018-10-20 10:45', 'YYYY-MM-DD HH:mm'),
        timeSend: moment('2018-10-20 11:45', 'YYYY-MM-DD HH:mm'),
        complete: false,
      }
    ];
    return {todos, today};
  }
  public genId(todos: TodoBase[]): number {
    return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 10;
  }
}
