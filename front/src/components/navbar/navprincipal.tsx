'use client';

import { NAV_LINKS } from '@/constants/navLinks';
import { useCartStore } from '@/store/cart.store';
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
  const courses = useCartStore(state => state.courses)

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
        className="absolute top-[14px] h-[79px] z-10 bg-[rgba(31,32,38,0.6)] flex justify-between gap-4"
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
          <NavbarContent className="hidden xl:flex gap-2" justify="center">
            {
              NAV_LINKS.map(link =>
                <Link className='p-2 px-3 text-sm font-semibold hover:text-primario-600 transition text-primario-200' key={link.id} href={link.path}>
                  {link.value}
                </Link>
              )
            }
          </NavbarContent>
        </section>
        <NavbarContent justify="end">
          <Link className='relative' href={"/cart"}>
            {
              courses.length > 0 &&
              <span className='absolute size-6 text-xs  bg-primario-600 rounded-full flex items-center justify-center -translate-x-4 translate-y-3'>
                {courses.length}
              </span>
            }
            <NavbarItem>
              <ShoppingCart />
            </NavbarItem>
          </Link>
          <NavbarItem>
            <Bell />
          </NavbarItem>
          <NavbarItem>
            <Mail />
          </NavbarItem>

          <NavbarItem className="hidden lg:flex mr-5">
            <SwitchCreator />
          </NavbarItem>
          <NavbarItem>
            <Link href="/perfil">
              <Image
                alt="profile avatar"
                className="object-cover rounded-switch w-full"
                src="/avatar.png"
                width={40}
                height={40}
              /></Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
