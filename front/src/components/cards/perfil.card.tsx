// src/components/cards/PerfilCard.tsx
import React from 'react';
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react"; // Asegúrate de que el componente Avatar esté importado correctamente
import Link from 'next/link';

interface PerfilCardProps {
    className?: string; // Prop para el className
    avatarSrc: string;
    userName: string;
    sellerType: string;
    publishedCourses: number;
    createdApps: number;
    subscribers: number;
    mentorshipDescription: string;

}

const PerfilCard: React.FC<PerfilCardProps> = ({
    className, // Recibe className como prop
    avatarSrc,
    userName,
    sellerType,
    publishedCourses,
    createdApps,
    subscribers,
    mentorshipDescription,

}) => {
    return (
        <Card isBlurred className={`bg-background/60 p-2 ${className}`} shadow="lg"> {/* Aplica className aquí */}
            <CardBody className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-2 md:w-1/3">
                    <Avatar src={avatarSrc} className="w-40 h-40" />
                    <Button size="sm" variant="light" className="text-primario-200" >
                        Editar foto de perfil
                    </Button>
                    <h2 className="text-xl font-bold">{userName}</h2>
                </div>

                <div className="md:w-2/3">
                    <div className="flex justify-center md:justify-start">
                        <span className="text-md">{sellerType}</span>
                        <span className="border border-none rounded-xl p-1 text-sm shadow-sm bg-custom-gradient">PRO</span>
                    </div>
                    <div className="flex justify-between mb-4 mt-4">
                        <div>
                            <span className="font-bold text-primario-200">{publishedCourses} </span>
                            <span className="text-xs">Cursos publicados</span>
                        </div>
                        <div>
                            <span className="font-bold text-primario-200">{createdApps} </span>
                            <span className="text-xs">Aplicaciones creadas</span>
                        </div>
                        <div>
                            <span className="font-bold text-primario-200">{subscribers} </span>
                            <span className="text-xs">Subscriptores</span>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-semibold mb-2">Ofrece sesiones de mentoría</h3>
                        <p className="text-xs mb-4">{mentorshipDescription}</p>
                        <Button color="secondary" className="bg-purple-600 text-white" >
                            <Link href="/perfil/create">
                                Crear mi perfil de mentor
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default PerfilCard;