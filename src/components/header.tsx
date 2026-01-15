import Image from 'next/image'
import Link from 'next/link';
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AppAsset from '@/core/app-asset'

export default function Header() {
    const navBarItems = [
        { title: 'Home', link: '/' },
        { title: 'Workspaces', link: '/workspaces' },
        { title: 'Membership', link: '/membership' },
        { title: 'Blog', link: '/blog' },
        { title: 'Favorites', link: '/favorites' },
    ];

    return (
        <header
            className='w-full h-20 shadow-md font-sora'>
            {/* Main */}
            <div
                className='w-full h-full xl:container mx-auto flex flex-row items-center justify-between px-5'>
                <Image
                    src={AppAsset.Images.WorkoraName}
                    alt='Workora' />

                <div
                    className='hidden md:flex flex-row items-center justify-between'>
                    {
                        navBarItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className='mx-4 text-sm font-medium text-[#6D6D72] hover:text-primary transition-colors'>
                                {item.title}
                            </Link>
                        ))
                    }
                </div>

                <div
                    className='hidden lg:flex flex-row items-center justify-end gap-5'>
                    <Button
                        variant='outline'
                        className='border border-primary '>
                        Contact Us
                    </Button>

                </div>

                <div className='lg:hidden'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Image
                                src={AppAsset.Icons.HamburgMenu}
                                alt='Hamburg Menu'
                                className='' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {
                                navBarItems.map((item, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        asChild>
                                        <Link
                                            href={item.link}
                                            className='w-full'>
                                            {item.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </header>
    )
}
