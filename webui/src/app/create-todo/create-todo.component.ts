import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  createForm = this.builder.group({
    name: [''],
    description: [''],
    completed: [''],
    targetDate: [''],
    id: ['']
  });

  constructor(private builder: FormBuilder, private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn();

    this.todoService.createTodo(new Todo(
      this.createForm.get('name').value,
      this.createForm.get('description').value,
      this.createForm.get('targetDate').value
    )).subscribe({
      next: data => { console.log(data);  },
      error: error => console.error('There was an error!', error)
    });
  }

}
