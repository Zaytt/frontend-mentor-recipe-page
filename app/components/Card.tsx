import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-3xl w-[736px] flex justify-center flex-col align-top p-10 shadow-md">
      {children}
    </div>
  );
};

export default Card;
