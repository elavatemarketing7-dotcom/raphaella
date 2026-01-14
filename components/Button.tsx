
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  variant = 'primary',
  size = 'md',
  icon
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-500 rounded-2xl text-center active:scale-95 disabled:opacity-50 overflow-hidden relative group";
  
  const variants = {
    primary: "bg-[#c5a059] text-white shadow-xl hover:shadow-[#c5a059]/40",
    secondary: "bg-[#1a1a1a] text-white",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white shadow-sm",
    whatsapp: "bg-[#25D366] text-white shadow-2xl hover:shadow-[#25D366]/40"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-8 py-4 text-[11px]",
    lg: "px-10 py-5 text-xs",
    xl: "px-12 py-6 text-sm w-full"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <div className="absolute inset-0 w-1/2 h-full bg-white/10 -skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out pointer-events-none" />
      {icon && <span className="mr-3 scale-110">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
