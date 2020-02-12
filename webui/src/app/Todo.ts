
export class Todo {
  completed: boolean;
  id: number;

  constructor( public name, public description, public targetDate) {
    this.completed = false;
  }
}
