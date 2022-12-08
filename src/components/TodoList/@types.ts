interface ITodo {
  task: string;
  finished: boolean;
}

export interface ITodoListProps {
  todoList: ITodo[];
  removeTask: (task: string) => void;
  handleFinishedTasks: (task: string) => void;
}
