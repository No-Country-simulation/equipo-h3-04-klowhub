import React from 'react';

interface TextTitleSubProps {
    title: string;
    subtitle: string;
}

const TextTitleSub: React.FC<TextTitleSubProps> = ({ title, subtitle }) => {
    return (
        <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="m-2 ml-0 text-sm text-gray-400">{subtitle}</p>
        </div>
    );
};

export default TextTitleSub;