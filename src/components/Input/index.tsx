import { FormEvent, useState } from 'react';
import PlusCircle from '../../assets/plus-circle.svg';
import { IInputProps } from './@types';

export function Input({ saveTodo }: IInputProps) {
  const [inputValue, setInputValue] = useState('');

  const submitTodo = (e: FormEvent) => {
    e.preventDefault();
    saveTodo(inputValue);
    setInputValue('');
  };

  return (
    <form
      className="w-screen flex justify-center items-center gap-2 -mt-6"
      onSubmit={(e) => submitTodo(e)}
    >
      <input
        className="w-1/2 bg-stone-700 rounded-lg p-2.5 text-stone-100 shadow-md shadow-stone-900/600"
        type="text"
        id="todoBox"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        className="bg-emerald-600 font-bold rounded-lg flex justify-center items-center p-2.5 px-9 text-stone-100 gap-1.5 shadow-md shadow-stone-900/600"
      >
        Criar
        <img src={PlusCircle} alt="plus" />
      </button>
    </form>
  );
}
