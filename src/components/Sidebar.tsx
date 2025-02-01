import { IoCalendarOutline, IoCheckboxOutline, IoListOutline } from 'react-icons/io5';
import { SidebarItem } from './SidebarItem';
import { CiLogout } from 'react-icons/ci';
import Image from "next/image"
import Link from "next/link"



const ITEMS = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon : <IoCalendarOutline/>
    },
    {
        path: '/dashboard/rest-todos',
        title : 'Rest Todos',
        icon : <IoCheckboxOutline/>,
    },
    {
        path: '/dashboard/server-todos',
        title: 'Server Actions',
        icon : <IoListOutline/>
    },
]

export const Sidebar = () => {
    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home">
                        <h1>Dashboard</h1>
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8ff197f8cc835362da6527cfd1509931~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=76921&refresh_token=921a40a3f7ef864ced7c4c0ec3ba2539&x-expires=1738587600&x-signature=28733bXA5%2BA3J03cgX1gkKy7NR8%3D&shp=a5d48078&shcp=81f88b70"
                        alt="imagen del usuario" width={40} height={40} className="m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Fermin Facchin Quiroga</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        ITEMS.map((item) => (
                            <SidebarItem key={item.path} {...item} />
                        ))
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside>
    )
}