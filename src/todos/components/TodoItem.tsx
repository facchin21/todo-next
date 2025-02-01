"use client"
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import styles from './TodoItem.module.css';
import { Todo } from '@prisma/client';
import React, { startTransition, useOptimistic } from 'react';
import { toggleTodo } from '../actions/todo-actions';

interface Props {
    todo: Todo;
    // TODO: Acciones que quiero llamar
    toggleCompleteTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export function TodoItem({ todo }: Props) {

    const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
        todo,
        (state, newCompleteValue: boolean) => ({ ...state, complete: newCompleteValue })
    );

    const onToggleTodo = async () => {
        try {
            startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete))
            await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);

        } catch (error) {
            toggleTodoOptimistic(!todoOptimistic.complete);
        }
    }

    return (
        <div className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
            onClick={onToggleTodo}>
            {/* onClick={() => toggleCompleteTodo(todoOptimistic.id, !todoOptimistic.complete)}> */}
            <div className='flex flex-col sm:flex-row items-center justify-start gap-4'>
                <div className={`
                        flex p-2 rounded-md cursor-pointer
                        hover:bg-opacity-60 
                        ${todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'}
                    `}>
                    {
                        todoOptimistic.complete ?
                            <IoCheckboxOutline size={30} />
                            :
                            <IoSquareOutline size={30} />
                    }
                </div>

                <div className='text-center sm:text-left'>
                    {todoOptimistic.description}
                </div>
            </div>
        </div>
    )
}
