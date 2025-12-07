import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "header" | "footer";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | string; // Custom size class
  transparent?: boolean; // Use transparent background logo
}

const Logo: React.FC<LogoProps> = ({ 
  variant = "header", 
  className = "",
  size = "md",
  transparent = true // PNG logo has transparent background
}) => {
  const logoClasses = {
    header: "flex items-center hover:opacity-80 transition-opacity",
    footer: "flex items-center mb-4",
  };

  // Default sizes based on variant
  const defaultSizes = {
    header: "h-20 w-auto", // Increased from h-12
    footer: "h-16 w-auto", // Increased from h-10
  };

  // Predefined size options
  const sizeClasses: Record<string, string> = {
    sm: "h-12 w-auto",   // Increased from h-8
    md: "h-16 w-auto",   // Increased from h-12
    lg: "h-24 w-auto",   // Increased from h-16
    xl: "h-32 w-auto",   // Increased from h-20
  };

  // Determine logo size class
  const logoSizeClass = size 
    ? (sizeClasses[size] || size) // Use predefined or custom class
    : defaultSizes[variant];

  // Use PNG logo with transparent background
  const logoPath = "/images/logos/image-Photoroom.png";

  const logoContent = (
    <img
      src={logoPath}
            alt="David Nguyen Savills"
      className={`${logoSizeClass} object-contain`}
    />
  );

  if (variant === "footer") {
    return <div className={className}>{logoContent}</div>;
  }

  return (
    <Link to="/" className={`${logoClasses[variant]} ${className}`}>
      {logoContent}
    </Link>
  );
};

export default Logo;

