import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import styles from './TodoItem.module.css';
import { Todo } from '@prisma/client';
import React from 'react';

interface Props {
    todo: Todo;
    // TODO: Acciones que quiero llamar
    toggleCompleteTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export function TodoItem({ todo, toggleCompleteTodo }: Props) {
    return (
        <div className={todo.complete ? styles.todoDone : styles.todoPending}
            onClick={() => toggleCompleteTodo(todo.id, !todo.complete)}>
            <div className='flex flex-col sm:flex-row items-center justify-start gap-4'>
                <div className={`
                        flex p-2 rounded-md cursor-pointer
                        hover:bg-opacity-60 
                        ${todo.complete ? 'bg-blue-100' : 'bg-red-100'}
                    `}>
                    {
                        todo.complete ?
                            <IoCheckboxOutline size={30} />
                            :
                            <IoSquareOutline size={30} />
                    }
                </div>

                <div className='text-center sm:text-left'>
                    {todo.description}
                </div>
            </div>
        </div>
    )
}
