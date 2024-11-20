import { Briefcase, Icon, Rocket } from 'lucide-react';
import React, { useState } from 'react';

const SwitchCreator: React.FC = () => {
    const [isExplorador, setIsExplorador] = useState(true); // Estado para controlar el texto activo

    const toggleSwitch = () => {
        setIsExplorador((prev) => !prev); // Cambia el estado al contrario
    };

    return (
        <div className="hidden sm:flex items-center ">
            <div className="xl:text-xl ml-4 mr-1">
                {isExplorador ? 'Explorador' : 'Creador'}
            </div>
            <div className="flex first-letter:h-8 items-center bg-[rgba(255,255,255,0.2)] rounded-md pt-1 pb-1 pr-0.5 pl-0.5">
                <div
                    onClick={toggleSwitch} // Cambia el estado al hacer clic
                    className={`m-1 pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer ${isExplorador ? 'bg-[rgba(129,42,172,1)]' : ''} rounded-md`} // Estilo condicional
                >
                    <Briefcase />
                </div>
                <div
                    onClick={toggleSwitch} // Cambia el estado al hacer clic
                    className={`m-1 pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer rounded-md ${!isExplorador ? 'bg-[rgba(129,42,172,1)]' : ''}`} // Estilo condicional
                >
                    <Rocket />
                </div>
            </div>
        </div>
    );
};

export default SwitchCreator;