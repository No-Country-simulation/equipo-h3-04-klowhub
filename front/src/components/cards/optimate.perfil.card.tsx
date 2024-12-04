import { Button, Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

interface OptimatePerfilProps {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const OptimatePerfil: React.FC<OptimatePerfilProps> = ({
  className,
  imageSrc,
  title,
  description,
  buttonText,
}) => {
  return (
    <Card isBlurred className={`bg-background/60 ${className}`} shadow="lg">
      <CardBody className="p-0 gap-4 mb-4 flex flex-col justify-center">
        <div className="relative w-full h-48">
          <Image
            alt={title}
            className="object-cover rounded-sm w-full h-full"
            src={imageSrc}
            fill
          />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold mb-2">{title}</h3>
          <p className="text-xs mb-4">{description}</p>
          <Button color="secondary" className="bg-purple-600 text-white">
            {buttonText}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default OptimatePerfil;