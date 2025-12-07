import React from "react";

interface LogoIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  transparent?: boolean;
}

/**
 * LogoIcon Component
 * 
 * Renders the David Nguyen logo as an inline SVG component.
 * Supports both regular and transparent background versions.
 * 
 * @param className - Additional CSS classes
 * @param width - Logo width (default: "100%")
 * @param height - Logo height (default: "100%")
 * @param transparent - Use transparent background version (default: false)
 */
const LogoIcon: React.FC<LogoIconProps> = ({
  className = "",
  width = "100%",
  height = "100%",
  transparent = false,
}) => {
  // Use PNG logo with transparent background
  const logoPath = "/images/logos/image-Photoroom.png";

  return (
    <img
      src={logoPath}
            alt="David Nguyen"
      className={className}
      width={width}
      height={height}
      style={{ objectFit: "contain" }}
    />
  );
};

export default LogoIcon;

