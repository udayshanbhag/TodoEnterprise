import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppAuthGuard } from './AppAuthGuard';
import { CreateTodoComponent } from './create-todo/create-todo.component';


const routes: Routes = [
  {
    path: 'admin',
    component:  AdminComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['admin'] }
  },
  // {
  //   path: 'create',
  //   component:  CreateTodoComponent,
  //   canActivate: [AppAuthGuard],
  // },
  {
    path: '',
    component: TodoListComponent,
    canActivate: [AppAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
