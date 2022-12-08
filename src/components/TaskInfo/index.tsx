import { ITaskInfoProps } from './@types';

export function TaskInfo({
  numberOfTasks,
  numberOfFinishedTasks,
}: ITaskInfoProps) {
  return (
    <header className="flex justify-around pt-20 ">
      <div className="flex gap-2">
        <span className="text-emerald-500 font-bold">Tarefas criadas</span>
        <span className="text-stone-200 bg-stone-700 px-2 block rounded-full">
          {numberOfTasks}
        </span>
      </div>
      <div className="flex gap-2">
        <span className="text-orange-500 font-bold">Concluídas</span>
        <span className="text-stone-200 bg-stone-700 px-2 block rounded-full">
          {numberOfFinishedTasks} de {numberOfTasks}
        </span>
      </div>
    </header>
  );
}
