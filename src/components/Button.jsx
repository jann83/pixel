
import React from "react";

const Button = ({
  children, // El texto o contenido dentro del botón
  variant = "primary", // Variantes: primary, secondary, danger, etc.
  size = "md", // Tamaños: sm, md, lg
  className = "", // Clases adicionales para personalización
  ...props // Propiedades adicionales como onClick, type, etc.
}) => {
  const baseClasses =
    "inline-block font-medium text-center rounded-lg focus:outline-none focus:ring transition";

  const variants = {
    primary: "bg-customOrange-500 text-white hover:bg-customOrange-600 focus:ring-customOrange-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
