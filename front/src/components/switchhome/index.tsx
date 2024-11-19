import React, { useState } from 'react';

const SwitchHome: React.FC = () => {
    const [isHome, setIsHome] = useState(true); // Estado para controlar el texto activo

    const toggleSwitch = () => {
        setIsHome((prev) => !prev); // Cambia el estado al contrario
    };

    return (
        <div className="hidden sm:flex h-8 items-center bg-[rgba(255,255,255,0.2)] rounded-md pt-1 pb-1 pr-0.5 pl-0.5">
            <div
                onClick={toggleSwitch} // Cambia el estado al hacer clic
                className={`m-1 pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer ${isHome ? 'bg-[rgba(129,42,172,1)]' : ''} rounded-md`} // Estilo condicional
            >
                Home
            </div>
            <div
                onClick={toggleSwitch} // Cambia el estado al hacer clic
                className={`m-1 pt-0.5 pb-0.5 pl-1 pr-1 cursor-pointer rounded-md ${!isHome ? 'bg-[rgba(129,42,172,1)]' : ''}`} // Estilo condicional
            >
                Plataforma
            </div>
        </div>
    );
};

export default SwitchHome;