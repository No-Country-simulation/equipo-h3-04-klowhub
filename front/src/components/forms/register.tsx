'use client';
import { BACK_URL } from '@/constants/constants';
import { useUserStore } from "@/store/user.store";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface ResRegister {
    code: number;
    message: string;
    //data: IUser;
}

export default function RegisterForm() {
    const [form, setForm] = useState({
        name: '',
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
            const fetchData = await fetch(`${BACK_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            if (fetchData.ok) {
                const data: ResRegister = await fetchData.json();
                console.log(data);
                toast.success('Cuenta creada exitosamente, redirigiendo...')
                route.push('/login')
            } else {
                toast.error('Error al crear la cuenta')
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
                name="name"
                label="Nombre"
                placeholder="Pedro Perez"
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
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
            <Button type="submit" color="secondary" className="mt-4 px-16" isLoading={loading} isDisabled={loading}>
                Crear cuenta
            </Button>
        </form>
    )
}