import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import { MatDialogRef } from '@angular/material';
import { Todo } from '../Todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {


  updateForm = this.builder.group({
    name: [''],
    description: [''],
    completed: [''],
    targetDate: [''],
    id: ['']
  });

  todo: Todo;
  constructor(private builder: FormBuilder, private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }



  onSubmit() {
    console.warn('Updating tod now');

    this.todoService.createTodo(new Todo(
      this.updateForm.get('name').value,
      this.updateForm.get('description').value,
      this.updateForm.get('targetDate').value
    )).subscribe({
      next: data => { console.log(data);  },
      error: error => console.error('There was an error!', error)
    });
  }
}
