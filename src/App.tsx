import { useState } from 'react';
import { Header, Input } from './components';

function App() {
  const [todoList, setTodoList] = useState([] as string[]);

  const saveTodo = (inputValue: string) => {
    setTodoList((prevState) => [...prevState, inputValue]);
  };

  return (
    <div>
      <Header />
      <Input saveTodo={saveTodo} />
    </div>
  );
}

export default App;
