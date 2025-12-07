import React from "react";

interface ZaloIconProps {
  className?: string;
}

const ZaloIcon: React.FC<ZaloIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <img 
      src="/images/icon/icons8-zalo.svg"
      alt="Zalo"
      className={`${className} object-contain`}
    />
  );
};

export default ZaloIcon;

