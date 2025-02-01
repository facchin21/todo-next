"use client";

// import * as todosApi from '@/todos/helpers/todos';
// import { useRouter } from 'next/navigation';
import { Todo } from '@prisma/client';
import { TodoItem } from './TodoItem';
import React from 'react'
import { toggleTodo } from '../actions/todo-actions';

interface Props {
    todos?: Todo[];
}

export function TodosGrid({ todos = [] }: Props) {

    // const router = useRouter();

    // const toggleCompleteTodo = async (id: string, complete: boolean) => {
    //     await todosApi.updateCompleteTodo(id, complete);
    //     router.refresh();
    // }




    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id}
                        todo={todo}
                        toggleCompleteTodo={toggleTodo} />
                ))
            }
        </div>
    )
}
