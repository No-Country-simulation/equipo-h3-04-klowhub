'use client';
import { BACK_URL } from '@/enums/constants';
import { IUser } from '@/interfaces/user';
import { useUserStore } from '@/store/user.store';
import { Button, Input, Link } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'sonner';
interface ResLogin {
  code: number;
  data: {
    access: string;
    profile: IUser;
  };
  message: string;
}

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { setUser } = useUserStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    const fetchData = await fetch(`${BACK_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data: ResLogin = await fetchData.json();
    setUser(data.data.profile);
    toast.success(data.message);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <Input
          name="email"
          label="Email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button type="submit" color="primary" className="mt-4">
          Iniciar Sesión
        </Button>
      </form>
      <Link href={'/'}>
        <Button color="secondary" className="mt-4">
          Volver a Inicio
        </Button>
      </Link>
    </div>
  );
}
