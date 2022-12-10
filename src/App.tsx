import { useEffect, useState } from 'react';
import { EmptyTodoList, Header, Input, TaskInfo, TodoList } from './components';
import { todoListPersist, updateTodoList } from './helpers/persist';

interface ITodo {
  task: string;
  finished: boolean;
}

function App() {
  const [todoList, setTodoList] = useState([] as ITodo[]);

  useEffect(() => {
    const persist = updateTodoList;
    setTodoList(persist);
  }, []);

  const saveTask = (inputValue: string) => {
    const updatedTodo = [...todoList, { task: inputValue, finished: false }];
    setTodoList([...updatedTodo]);
    todoListPersist(updatedTodo);
  };

  const removeTask = (task: string) => {
    const updatedTodo = todoList.filter((curTask) => curTask.task !== task);
    setTodoList([...updatedTodo]);
    todoListPersist(updatedTodo);
  };

  const handleFinishedTasks = (task: string) => {
    const updatedTodo = todoList.map((curTask) => {
      if (curTask.task === task)
        return { ...curTask, finished: !curTask.finished };
      return curTask;
    });

    setTodoList([...updatedTodo]);
    todoListPersist(updatedTodo);
  };

  const numberOfTasks = todoList.length;
  const numberOfFinishedTasks = todoList.reduce(
    (finishedTasks, task) =>
      task.finished ? finishedTasks + 1 : finishedTasks,
    0
  );

  return (
    <div className="overflow-hidden">
      <Header />
      <Input saveTask={saveTask} />
      <main className="bg-stone-800 w-screen h-screen -mt-6">
        <TaskInfo
          numberOfTasks={numberOfTasks}
          numberOfFinishedTasks={numberOfFinishedTasks}
        />
        {numberOfTasks === 0 ? (
          <EmptyTodoList />
        ) : (
          <TodoList
            todoList={todoList}
            removeTask={removeTask}
            handleFinishedTasks={handleFinishedTasks}
          />
        )}
      </main>
    </div>
  );
}

export default App;
