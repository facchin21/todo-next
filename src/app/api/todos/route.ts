import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import * as yup from 'yup';

export async function GET(req: Request) {
    // Obtener los parametros de la URL
    const { searchParams } = new URL(req.url);
    const take = +(searchParams.get('take') ?? '10');
    const skip = +(searchParams.get('skip') ?? '0');

    // Validar que take y skip sean numeros
    if (isNaN(take)) {
        return NextResponse.json(
            { message: 'Take tiene que ser un numero' },
            { status: 400 }
        );
    }
    if (isNaN(skip)) {
        return NextResponse.json(
            { message: 'Skip tiene que ser un numero' },
            { status: 400 }
        );
    }
    // Obtener todos los registros de la tabla todo
    const todos = await prisma.todo.findMany({ take, skip })

    // Retornar los registros
    return NextResponse.json(todos);
}

const postSchema = yup.object({
    descripton: yup.string().required(),
    complete: yup.boolean().optional().default(false),
})

export async function POST(request: Request) {

    try {
        // Obtener los datos enviados en el body
        const { complete, descripton } = await postSchema.validate(await request.json());

        // Crear un nuevo registro en la tabla todo
        const todo = await prisma.todo.create({ data: { complete, descripton } });

        return NextResponse.json(todo);

    } catch (error) {
        return NextResponse.json({
            message: "Error al crear el todo",
            status: 404,
            error,
        })
    }


}