import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  dialogRef: MatDialogRef<CreateTodoComponent>;
  dialogUpdateRef: MatDialogRef<UpdateTodoComponent>;

  todos: Todo[];

  constructor(private todoService: TodoService, private dialog: MatDialog) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.todoService.getTodos().subscribe(data => this.todos = data);

  }
  // onCreateClick() {
  //   this.dialogRef = this.dialog.open(CreateTodoComponent);
  //   this.dialogRef.afterClosed().subscribe(() => {
  //     this.refresh();
  //   });
  // }

  // onUpdateClick() {
  //   this.dialogUpdateRef = this.dialog.open(UpdateTodoComponent);
  //   this.dialogUpdateRef.afterClosed().subscribe(() => {
  //     this.refresh();
  //   });
  // }
}
