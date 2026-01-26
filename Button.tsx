
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'white';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  // Adicionada a classe animate-pulse-cta para que todos os botões do componente pulsem por padrão
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 animate-pulse-cta";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    white: "bg-white text-blue-600 hover:bg-gray-100"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
