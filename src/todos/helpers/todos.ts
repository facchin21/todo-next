import { Todo } from "@prisma/client";


// const sleep = (seconds: number = 0): Promise<boolean> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true)
//         }, seconds * 1000);
//     })
// }

export const updateCompleteTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const body = { complete };

    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());

    return todo;
}

export const createTodo = async (description: string): Promise<Todo> => {

    const body = { description };

    const todo = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());

    console.log({ todo });

    return todo;
}

export const deleteCompletedTodos = async (): Promise<boolean> => {

    // await sleep(2)

    await fetch('/api/todos', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());

    return true;
}