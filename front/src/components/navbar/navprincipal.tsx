'use client';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,

} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import SwitchHome from '../switch/switch.home';
import SwitchCreator from '../switch/switch.creator';
import { navLinks } from '@/constants/navLinks';
import { Bell, ShoppingCart, Mail } from 'lucide-react';

export default function NavBar() {
    return (
        <>
            <div className="w-full h-[93px]">

                <Image
                    src="/navbar.png"
                    alt="Navbar background"
                    fill
                    priority
                    className="object-cover w-full h-full"
                />
                <Navbar maxWidth="full"
                    className="absolute top-[14px] h-[79px] z-10 bg-[rgba(31,32,38,0.6)]"
                >
                    <NavbarBrand className='justify-between'>
                        <div className="relative w-32 h-32">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="KlowHub Logo"
                                    fill
                                    style={{ transform: 'rotate(212.69deg)' }}
                                    className="object-contain"

                                />

                            </Link>
                        </div>
                        <SwitchHome />
                        <div></div>
                    </NavbarBrand>

                    <NavbarContent className="hidden lg:flex gap-4" justify="center">

                        {navLinks.map(({ id, path, text }) => (
                            <NavbarItem key={id}>

                                <Link className='text-sm lg:text-base xl:text-xl'
                                    href={path}>
                                    {text + " "}
                                </Link>

                            </NavbarItem>
                        ))}
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <ShoppingCart />
                        </NavbarItem>
                        <NavbarItem>
                            <Bell />
                        </NavbarItem>
                        <NavbarItem>
                            <Mail />
                        </NavbarItem>

                        <NavbarItem className="hidden lg:flex mr-20">
                            <SwitchCreator />
                        </NavbarItem>
                        <NavbarItem>
                            <Image
                                alt="profile avatar"
                                className="object-cover rounded-switch w-full"
                                src="/avatar.png"
                                width={40}
                                height={40}
                            />
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>
        </>
    );
}
