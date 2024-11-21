import { Briefcase, Icon, Rocket } from 'lucide-react';
import React, { useState } from 'react';
import '@/app/globals.css'

const SwitchCreator: React.FC = () => {
    const [isExplorador, setIsExplorador] = useState(true); // Estado para controlar el texto activo

    const toggleSwitch = () => {
        setIsExplorador((prev) => !prev); // Cambia el estado al contrario
    };

    return (
        <div className="hidden sm:flex items-center ">
            <div className="xl:text-xl ml-4 mr-2">
                {isExplorador ? 'Explorador' : 'Creador'}
            </div>
            <div className="flex first-letter:h-8 items-center bg-[rgba(129,42,172,1)] rounded-switch p-1">
                <div
                    onClick={toggleSwitch} // Cambia el estado al hacer clic
                    className={`m-1 pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer ${isExplorador ? 'bg-white rounded-switch' : ''} rounded-md`} // Estilo condicional
                >
                    <Briefcase color={`${isExplorador ? 'rgba(129,42,172,1)' : 'white'}`} />
                </div>
                <div
                    onClick={toggleSwitch} // Cambia el estado al hacer clic
                    className={`m-1 pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer rounded-md ${!isExplorador ? 'bg-white rounded-switch' : ''}`} // Estilo condicional
                >
                    <Rocket color={`${isExplorador ? 'white' : 'rgba(129,42,172,1)'}`} />
                </div>
            </div>
        </div>
    );
};

export default SwitchCreator;