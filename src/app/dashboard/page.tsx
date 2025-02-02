import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";


export default async function PageDashboard() {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <div className="grid gap-6 s,:grid-cols-2">
            <WidgetItem title="Usuario conectado S-Side">
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={session.user?.image || ''}
                        alt={`Imagen del usuario ${session.user?.name}`}
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    <span>{session.user?.name}</span>
                    <span>{session.user?.email}</span>
                </div>
            </WidgetItem>
        </div>
    )
}