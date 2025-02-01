'use server'

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleep = async (delay : number) => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(true)
        }, delay * 1000)
    })
}



export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    
    await sleep(2);

    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) {
        throw new Error(`Todo with id ${id} does not exist`);
    }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete },
    })


    revalidatePath('/dashboard/server-todos');

    return updatedTodo;
}


export const addTodo = async (description: string) => {
    try {
        // Crear un nuevo registro en la tabla todo
        const todo = await prisma.todo.create({ data: { description } });
        revalidatePath('/dashboard/server-todos');

        return todo;

    } catch (error) {
        return {
            message: "Error al crear el todo",
            error,
        }

    }
}

export const deleteCompletedTodos = async (): Promise<void> => {
    await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath('/dashboard/server-todos');
}