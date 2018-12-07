import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TodoBase} from '../../../models/Todo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TodoMockService {
  private todosUrl = 'api/todos';
  private todayUrl = 'api/today';

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<TodoBase[]> {
    return this.http.get<TodoBase[]>(this.todosUrl)
      .pipe(
        catchError(this.handleError('getTodos', []))
      );
  }

  public getTodayTodos(): Observable<TodoBase[]> {
    return this.http.get<TodoBase[]>(this.todayUrl)
      .pipe(
        catchError(this.handleError('getToday', []))
      );
  }

  public addTodos(addedTodo: TodoBase): Observable<TodoBase[]> {
    return this.http.post<TodoBase[]>(this.todosUrl, addedTodo, httpOptions).pipe(
      catchError(this.handleError<TodoBase[]>('addTodo'))
    );
  }

  public updateTodo(updatedTodo: TodoBase): Observable<any> {
    return this.http.put(this.todayUrl, updatedTodo, httpOptions).pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  public deleteTodayTodo(todo: TodoBase | number): Observable<TodoBase> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todayUrl}/${id}`;

    return this.http.delete<TodoBase>(url, httpOptions).pipe(
      catchError(this.handleError<TodoBase>('deleteTodayTodo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
