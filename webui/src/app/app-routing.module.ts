import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppAuthGuard } from './AppAuthGuard';


const routes: Routes = [
  {
    path: 'admin',
    component:  AdminComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path:'',
    component:TodoListComponent,
    canActivate: [AppAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
