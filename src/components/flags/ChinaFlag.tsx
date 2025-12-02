import React from "react";

const ChinaFlag: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => {
  return (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64" fill="#DE2910"/>
      <g fill="#FFDE00">
        <path d="M38 18 L44.36 38.54 L66.72 38.54 L48.18 52.92 L54.54 73.46 L38 59.08 L21.46 73.46 L27.82 52.92 L9.28 38.54 L31.64 38.54 Z"/>
        <path transform="translate(78,22)" d="M0 0 L2.35 5.65 L6 5.65 L3.3 8.1 L4.7 13.3 L0 10.2 L-4.7 13.3 L-3.3 8.1 L-6 5.65 L-2.35 5.65 Z"/>
        <path transform="translate(92,38)" d="M0 0 L2.35 5.65 L6 5.65 L3.3 8.1 L4.7 13.3 L0 10.2 L-4.7 13.3 L-3.3 8.1 L-6 5.65 L-2.35 5.65 Z"/>
        <path transform="translate(92,58)" d="M0 0 L2.35 5.65 L6 5.65 L3.3 8.1 L4.7 13.3 L0 10.2 L-4.7 13.3 L-3.3 8.1 L-6 5.65 L-2.35 5.65 Z"/>
        <path transform="translate(78,72)" d="M0 0 L2.35 5.65 L6 5.65 L3.3 8.1 L4.7 13.3 L0 10.2 L-4.7 13.3 L-3.3 8.1 L-6 5.65 L-2.35 5.65 Z"/>
      </g>
    </svg>
  );
};

export default ChinaFlag;

