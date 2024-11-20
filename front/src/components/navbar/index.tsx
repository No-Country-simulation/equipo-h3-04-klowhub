'use client';
import { navLinks } from '@/constants/navLinks';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,

} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import SwitchHome from '../switchhome';
import SwitchCreator from '../switchcreator';

export default function NavBar() {
    return (
        <>
            <div className=" w-full h-[93px]">
                <Image
                    src="/navbar.png"
                    alt="Navbar background"
                    fill
                    priority
                    className="object-cover"
                />
                <Navbar maxWidth="full"
                    className="absolute top-[14px] h-[79px] z-10 bg-[rgba(31,32,38,0.6)]"
                >
                    <NavbarBrand className='justify-between'>
                        <div className="relative w-32 h-32">
                            <Image
                                src="/logo.png"
                                alt="KlowHub Logo"
                                fill
                                style={{ transform: 'rotate(212.69deg)' }}
                                className="object-contain"

                            />
                        </div>
                        <SwitchHome />
                        <div></div>
                    </NavbarBrand>

                    <NavbarContent className="hidden sm:flex gap-4" justify="center">

                        {navLinks.map(({ id, path, text }) => (
                            <NavbarItem key={id}>

                                <Link
                                    href={path}>
                                    {text + " "}
                                </Link>

                            </NavbarItem>
                        ))}
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Link href="/login">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} color="primary" href="#" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>
        </>
    );
}
