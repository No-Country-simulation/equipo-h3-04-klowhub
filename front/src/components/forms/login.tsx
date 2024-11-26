'use client';
import { BACK_URL } from "@/constants/constants";
import { IUser } from "@/interfaces/user";
import { useUserStore } from "@/store/user.store";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface ResLogin {
  code: number;
  data: {
    access: string;
    profile: IUser;
  };
  message: string;
}

export default function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const route = useRouter()
  const { setUser } = useUserStore();
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      e.preventDefault();
      const fetchData = await fetch(`${BACK_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      console.log(await fetchData.json())
      if (fetchData.ok) {
        const data: ResLogin = await fetchData.json();
        setUser(data.data.profile);
        toast.success(data.message);
        toast('Redirigiendo...')
        route.push('/')

      } else if (fetchData.status === 401) {
        toast.error("Email o contraseña incorrecta")
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-3"
    >
      <Input
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        name="password"
        label="Contraseña"
        placeholder="*****"
        type="password"
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button type="submit" color="secondary" className="mt-4" isLoading={loading} isDisabled={loading}>
        Iniciar Sesión
      </Button>
    </form>
  )
}