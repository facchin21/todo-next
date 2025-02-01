import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';
import * as yup from 'yup';

interface Segments {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params }: Segments) {
    // Obtener el id de los parametros
    const { id } = params;

    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) {
        return NextResponse.json({ message: `Todo con el id ${id} no existe` }, { status: 404 });
    }

    return NextResponse.json({ status: "succes", todo });
}


const putSchema = yup.object({
    complete: yup.boolean().optional(),
    descripton: yup.string().optional(),
})


export async function PUT(request: Request, { params }: Segments) {
    try {

        // Obtener el id de los parametros
        const { id } = params;
        const todo = await prisma.todo.findFirst({ where: { id } });

        // Obtener los datos del body
        const { complete, descripton } = await putSchema.validate(await request.json());

        // Verificar si el todo existe
        if (!todo) {
            return NextResponse.json({ message: `Todo con el id ${id} no existe` }, { status: 404 });
        }

        // Actualizar el todo
        const updateTodo = await prisma.todo.update({
            where: { id },
            data: { complete, descripton }
        })

        // Retornar la respuesta
        return NextResponse.json({ status: "succes", updateTodo });
    } catch (error) {
        return NextResponse.json(
            error,
            { status: 404 },
        );
    }
}