import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { MatDialogRef, MatDialog } from '@angular/material';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  dialogRef: MatDialogRef<CreateTodoComponent>;

  todos: Todo[];

  constructor(private todoService: TodoService, private dialog: MatDialog ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.todoService.getTodos().subscribe(data => this.todos = data);

  }
  onCreateClick() {
    this.dialogRef = this.dialog.open(CreateTodoComponent);
    this.dialogRef.afterClosed().subscribe( () =>  {
      console.log('trigggrred dialog closed ');
      this.refresh();} );
  }
}
