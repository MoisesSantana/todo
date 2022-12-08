import { useState } from 'react';
import { Header, Input, TaskInfo } from './components';

interface ITodo {
  task: string;
  finished: boolean;
}

function App() {
  const [todoList, setTodoList] = useState([] as ITodo[]);

  const saveTodo = (inputValue: string) => {
    setTodoList((prevState) => [
      ...prevState,
      { task: inputValue, finished: false },
    ]);
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
      <Input saveTodo={saveTodo} />
      <main className="bg-stone-800 w-screen h-screen -mt-6">
        <TaskInfo
          numberOfTasks={numberOfTasks}
          numberOfFinishedTasks={numberOfFinishedTasks}
        />
      </main>
    </div>
  );
}

export default App;
