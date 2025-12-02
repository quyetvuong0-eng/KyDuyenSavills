import React from "react";

const UKFlag: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="64" fill="#012169"/>
        <path fill="#FFFFFF" d="M0,0 L128,128 M128,0 L0,128" stroke="#FFFFFF" strokeWidth="21.33"/>
        <path fill="#FFFFFF" d="M64,0 L64,128 M0,64 L128,64" stroke="#FFFFFF" strokeWidth="42.67"/>
        <path fill="#C8102E" d="M0,0 L128,128 M128,0 L0,128" stroke="#C8102E" strokeWidth="12.8"/>
        <path fill="#C8102E" d="M64,0 L64,128 M0,64 L128,64" stroke="#C8102E" strokeWidth="25.6"/>
    </svg>
  );
};

export default UKFlag;
