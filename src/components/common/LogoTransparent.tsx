import React from "react";

interface LogoTransparentProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * LogoTransparent Component
 * 
 * Renders the David Nguyen logo with transparent background.
 * This is a convenience component that uses LogoIcon with transparent=true.
 * 
 * @param className - Additional CSS classes
 * @param width - Logo width (default: "100%")
 * @param height - Logo height (default: "100%")
 */
const LogoTransparent: React.FC<LogoTransparentProps> = ({
  className = "",
  width = "100%",
  height = "100%",
}) => {
  return (
    <img
      src="/images/logos/image-Photoroom.png"
            alt="David Nguyen"
      className={className}
      width={width}
      height={height}
      style={{ objectFit: "contain" }}
    />
  );
};

export default LogoTransparent;

