import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {

    await prisma.todo.deleteMany({}) // Elimina todos los registros de la tabla todo


    const todo = await prisma.todo.createMany({
        data: [
            { description: 'Piedra del alma', complete: true },
            { description: 'Piedra del poder' },
            { description: 'Piedra del tiempo' },
            { description: 'Piedra del espacio' },
            { description: 'Piedra del realidad' },
        ]
    })

    return NextResponse.json({ message: "Seed", todo });
}