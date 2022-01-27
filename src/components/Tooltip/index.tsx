import React from 'react';
import "./index.css"

interface TooltipProps {
  children: JSX.Element;
  overlay: string;
}

const Tooltip = ({ children, overlay }: TooltipProps) => {
  return (
    <div className="tooltip">
      <span className="tooltip_text">
        {overlay}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
