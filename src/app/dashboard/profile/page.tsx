'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";


export default function ProfilePage() {

    const { data: session } = useSession();


    return (
        <div>
            <h1>Profile Page</h1>
            <hr />
            <div className="flex flex-col items-center justify-center mt-12">
                <Image src={session?.user?.image}
                    alt={`Imagen del usuario ${session?.user?.name}`}
                    width={200}
                    height={200} 
                    className="rounded-full"/>
                <span className="text-2xl font-semibold">{session?.user?.name}</span>
                <span className="text-gray-500">{session?.user?.email}</span>
                <span className="text-gray-500">ID :{session?.user?.id}</span>
                <span className="text-gray-500 capitalize">{session?.user?.roles?.join(', ')}</span>
            </div>
        </div>
    );
}