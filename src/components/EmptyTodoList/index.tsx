import EmptyList from '../../assets/empty-list.svg';

export function EmptyTodoList() {
  return (
    <section className="w-4/6 flex flex-col justify-center items-center mx-auto mt-6 pt-10 gap-6 border-t-2 border-stone-700">
      <div>
        <img src={EmptyList} alt="EmptyList" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-stone-500 font-extrabold">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text-stone-600">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </section>
  );
}
