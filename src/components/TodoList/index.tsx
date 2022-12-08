import { ITodoListProps } from './@types';
import NoCheck from '../../assets/no-check.svg';
import Checked from '../../assets/checked.svg';
import Trash from '../../assets/trash.svg';

export function TodoList({
  todoList,
  removeTask,
  handleFinishedTasks,
}: ITodoListProps) {
  return (
    <ul className="flex flex-col gap-4 justify-center items-center mt-10">
      {todoList.map(({ task, finished }) => (
        <li
          key={task}
          className="w-1/2 box-content rounded-lg px-20 py-2 flex gap-4 items-start bg-stone-600"
        >
          <img
            className="basis-4 cursor-pointer"
            src={finished ? Checked : NoCheck}
            alt={finished ? 'checked' : 'no checked'}
            onClick={() => handleFinishedTasks(task)}
          />
          <span
            className={`${
              finished && 'line-through opacity-25'
            } text-stone-100 font-extralight break-words basis-full`}
          >
            {task}
          </span>
          <img
            className="basis-4 cursor-pointer"
            src={Trash}
            alt="trash"
            onClick={() => removeTask(task)}
          />
        </li>
      ))}
    </ul>
  );
}
