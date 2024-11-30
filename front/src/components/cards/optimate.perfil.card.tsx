import React from 'react';
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

interface OptimatePerfilProps {
    className?: string; // Prop para el className
    imageSrc: string;
    title: string;
    description: string;
    buttonText: string;
}

const OptimatePerfil: React.FC<OptimatePerfilProps> = ({
    className, // Recibe className como prop
    imageSrc,
    title,
    description,
    buttonText,
}) => {
    return (
        <Card isBlurred className={`bg-background/60 ${className}`} shadow="lg"> {/* Aplica className aquí */}
            <CardBody className="p-0 gap-4 mb-4 flex flex-col justify-center">
                <Image
                    alt={title} // Mejora la accesibilidad
                    className="object-cover rounded-sm w-full aspect-video -z-1"
                    src={imageSrc}
                />
                <div className="text-center">
                    <h3 className="text-sm font-semibold mb-2">{title}</h3>
                    <p className="text-xs mb-4">{description}</p>
                    <Button color="secondary" className="bg-purple-600 text-white" >
                        {buttonText}
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default OptimatePerfil;