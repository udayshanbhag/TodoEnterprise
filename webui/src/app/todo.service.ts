import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todourl = 'http://localhost/api/todo';

  getTodos(): Observable<Todo[]> {
     return this.http.get<Todo[]>(this.todourl);
  }

  getTodo(id: number ): Observable<Todo> {
    return this.http.get<Todo>(this.todourl + '/' + id);
 }
  createTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(this.todourl, todo);
  }

  updateTodo(todo) {
    return this.http.put(this.todourl, todo);
  }

}
