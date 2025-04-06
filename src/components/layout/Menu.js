"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

function Menu() {
    const pathname = usePathname()

    return (
        <div className='h-dvh flex flex-col w-[240px] p-4 bg-[#0C2955]'>
            {pathname}
            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                <Image
                    src="/navbar-icons/function-line.png"
                    width={24}
                    height={24}
                    className="rounded-full border border-black"
                    alt="GTR line icon"
                />
                <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-black">Erin Lindford</p>
                    </div>
                </div>
            </div>
            <Link href="/dashboard" className={`flex items-center gap-3 text-sm leading-[22.4px] text-[#C1C6DA] ${pathname === "/dashboard" ? "text-white" : ""}`}>
                <Image
                    src="/navbar-icons/function-line.png"
                    width={24}
                    height={24}
                    alt="GTR line icon"
                />
                Dashboard
            </Link>
            <Link href="/area-deep-dive" className={`${pathname === "/area-deep-dive" ? "text-white" : ""}`}>
                Area Deep Dive
            </Link>
            <Link href="/self" className={`${pathname === "/self" ? "text-white" : ""}`}>
                Self
            </Link>
            <Link href="/actions" className={`${pathname === "/actions" ? "text-white" : ""}`}>
                Actions
            </Link>
            <Link href="/obtainments" className={`${pathname === "/obtainments" ? "text-white" : ""}`}>
                Obtainments
            </Link>
            <Link href="/environment" className={`${pathname === "/environment" ? "text-white" : ""}`}>
                Environment
            </Link>
        </div>
    )
}

export default Menu
