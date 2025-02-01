// import { ListTodos } from "@/components";

import { NewTodo } from "@/components";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";


export const metadata = {
  title: 'Listado de TODOS',
  description: 'listados de todos los TODOS',
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      {/* TODO: Formulario para agregar*/}
      <TodosGrid todos={todos} />
    </div>
  );
}