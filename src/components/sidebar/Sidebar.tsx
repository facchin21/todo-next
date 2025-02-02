import { IoCalendarOutline, IoCardOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { LogoutButton } from './LogoutButton';
import { SidebarItem } from './SidebarItem';
import Image from "next/image"
import Link from "next/link"



const ITEMS = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: <IoCalendarOutline />
    },
    {
        path: '/dashboard/rest-todos',
        title: 'Rest Todos',
        icon: <IoCheckboxOutline />,
    },
    {
        path: '/dashboard/server-todos',
        title: 'Server Actions',
        icon: <IoListOutline />
    },
    {
        path: '/dashboard/cookies',
        title: 'Cookies',
        icon: <IoCodeWorkingOutline />
    },
    {
        path: '/dashboard/products',
        title: 'Products',
        icon: <IoCardOutline />
    },
    {
        path: '/dashboard/profile',
        title: 'Perfil',
        icon: <IoPersonOutline />
    },
]

export async function Sidebar() {
    const session = await getServerSession(authOptions)
    const userRoles = session?.user?.roles || ['Client']

    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home">
                        <h1>Dashboard</h1>
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image src={session?.user?.image || '/default-profile.png'}
                        alt={`imagen del  usuario ${session?.user?.name}`} width={40} height={40} className="m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session?.user?.name}</h5>
                    <span className="hidden text-gray-400 lg:block capitalize">{ userRoles.join(',')}</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        ITEMS.map((item) => (
                            <SidebarItem key={item.path} {...item} />
                        ))
                    }
                </ul>
            </div>

            <LogoutButton/>
        </aside>
    )
}