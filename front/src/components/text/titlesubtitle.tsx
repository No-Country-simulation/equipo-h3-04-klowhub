import React from 'react';

interface TextTitleSubProps {
  title: string;
  subtitle: string;
}

const TextTitleSub: React.FC<TextTitleSubProps> = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="prose lg:prose-lg m-2 ml-0 text-sm text-gray-400">{subtitle}</p>
    </div>
  );
};

export default TextTitleSub;