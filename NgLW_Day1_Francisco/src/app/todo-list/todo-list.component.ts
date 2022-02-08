import { Component, OnInit } from '@angular/core';

interface Task {
  title: string;
  complete: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [
    { title: "Do the dishes", complete: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  // Represents the new task that the user will add
  newTask = "";

  addTodo() {
    if (!this.newTask) return;

    // Add the entered task into the task list
    this.tasks.push({
      title: this.newTask,
      complete: false
    });

    // Reset the newTask state
    this.newTask = "";
  }

  deleteTodoAt(index: number) {
    this.tasks.splice(index, 1);
  }
}
