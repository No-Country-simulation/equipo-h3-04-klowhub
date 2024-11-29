'use client';
import { navLinks } from '@/constants/navLinks';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react';
import { Bell, Mail, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SwitchCreator from '../switch/switch.creator';
import SwitchHome from '../switch/switch.home';

export default function NavBar() {
  return (
    <div className="w-full h-[93px]">
      <Image
        src="/navbar.png"
        alt="Navbar background"
        fill
        priority
        className="object-cover w-full h-full"
      />
      <Navbar maxWidth="full"
        className="absolute top-[24px] z-10 bg-[rgba(31,32,38,0.6)] flex justify-between gap-4"
      >
        <section className='flex items-center gap-6'>
          <NavbarBrand className='justify-between'>
            <div className="relative w-16 h-16">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="KlowHub Logo"
                  fill
                  style={{ transform: 'rotate(212.69deg)' }}
                  className="object-cover w-full h-full"

                />
              </Link>
            </div>
            <SwitchHome />
            <div></div>
          </NavbarBrand>
          <NavbarContent className="hidden lg:flex" justify="center">
            {navLinks.map(({ id, path, text }) => (
              <NavbarItem key={id}>
                <Link className='text-sm text-primario-200 hover:text-primario-500 transition p-2'
                  href={path}>
                  {text}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </section>
        <section className='flex items-center gap-6 '>
          <NavbarItem>
            <ShoppingCart />
          </NavbarItem>
          <NavbarItem>
            <Bell />
          </NavbarItem>
          <NavbarItem>
            <Mail />
          </NavbarItem>

          <NavbarItem className="hidden lg:flex">
            <SwitchCreator />
          </NavbarItem>
          <NavbarItem className='relative'>
            <Image
              alt="profile avatar"
              className="w-full h-full object-cover rounded-switch"
              src="/avatar.png"
              width={40}
              height={40}
            />
          </NavbarItem>
        </section>
      </Navbar>
    </div >
  );
}
