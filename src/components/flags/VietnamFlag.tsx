import React from "react";

const VietnamFlag: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64" fill="#DA251D"/>
      <path fill="#FFFF00" d="M64 28 L70.36 48.54 L92.72 48.54 L74.18 62.92 L80.54 83.46 L64 69.08 L47.46 83.46 L53.82 62.92 L35.28 48.54 L57.64 48.54 Z"/>
    </svg>
  );
};

export default VietnamFlag;

