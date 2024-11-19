'use client';
import { navLinks } from '@/enums/navLinks';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';

export default function NavBar() {
  return (
    <>
      <div className="sticky w-full h-[93px]">
        <Image
          src="/navbar.png"
          alt="Navbar background"
          fill
          priority
          className="object-cover"
        />
        <Navbar maxWidth="full" className="top-[14px] h-[79px]">
          <NavbarBrand>
            <Image
              src="/logo.png"
              alt="KlowHub Logo"
              width={120}
              height={40}
              priority
              className="object-contain"
            />
          </NavbarBrand>
          <NavbarContent className="flex gap-4" justify="center">
            {navLinks.map(({ id, path, text }) => (
              <NavbarItem key={id}>
                <Link href={path}>{text}</Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                className="text-white"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
}
