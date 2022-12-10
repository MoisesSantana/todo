interface ITodo {
  task: string;
  finished: boolean;
}

export const todoListPersist = (todoList: ITodo[]) => {
  localStorage.setItem('todo', JSON.stringify(todoList));
};

export const updateTodoList = () => {
  const persist = localStorage.getItem('todo');
  if (persist) return JSON.parse(persist as string);
  return [];
};
