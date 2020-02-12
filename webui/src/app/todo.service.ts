import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      id: 1,
      targetDate: new Date('2020-02-02T00:00:00'),
      name: 'Rent',
      description: 'Pay Rent ',
      completed: false
    },
    {
      id: 2,
      targetDate: new Date('2020-02-05T00:00:00'),
      name: 'Water bill',
      description: 'Pay water bill ',
      completed: true
    },
    {
      id: 3,
      targetDate: new Date('2020-03-15T00:00:00'),
      name: 'Electricity bill',
      description: 'Pay Electricity bill ',
      completed: true
    }
  ];

  constructor(private http: HttpClient) { }

  todourl = 'http://localhost/api/todo';

  getTodos(): Observable<Todo[]> {
     return this.http.get<Todo[]>(this.todourl);
  }

  createTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(this.todourl, todo);
  }

}
