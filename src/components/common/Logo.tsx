import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n";

interface LogoProps {
  variant?: "header" | "footer";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = "header", className = "" }) => {
  const { t } = useTranslation();

  const logoClasses = {
    header: "flex items-center gap-2 hover:opacity-80 transition-opacity",
    footer: "flex items-center gap-2 mb-4",
  };

  const iconClasses = {
    header: "h-10 w-10",
    footer: "h-10 w-10",
  };

  const line1Classes = {
    header: "text-xs tracking-wider text-gray-600 font-light",
    footer: "text-xs tracking-wider text-gray-400 font-light",
  };

  const line2Classes = {
    header: "text-base font-semibold text-dark tracking-tight",
    footer: "text-base font-semibold tracking-tight",
  };

  const logoContent = (
    <>
      <div className={`${iconClasses[variant]} rounded-full bg-primary flex items-center justify-center`}>
        <span className="text-white font-bold text-lg">D</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={line1Classes[variant]}>
          {t.header.logo.line1}
        </span>
        <span className={line2Classes[variant]}>
          {t.header.logo.line2}
        </span>
      </div>
    </>
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

