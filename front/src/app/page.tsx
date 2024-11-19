'use client';
import { useUserStore } from '@/store/user.store';
import { Link } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { user } = useUserStore();
  console.log(user);
  if (!user) return <div>No tienes usuario

  </div>;
  else return <div>Tienes usuario: {JSON.stringify(user)}</div>;

}
