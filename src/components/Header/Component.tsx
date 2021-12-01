import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="mb-16">
      <h1 className="text-xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-4xl">
        {title.toLocaleUpperCase()}
      </h1>
    </div>
  );
};

Header.displayName = 'Header';
