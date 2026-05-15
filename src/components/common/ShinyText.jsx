import React from 'react';
import './ShinyText.css';

const ShinyText = ({
  text,
  disabled = false,
  className = '',
  variant = 'normal', // 'normal' or 'soft'
}) => {
  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  const shinyClass = variant === 'soft' ? 'shiny-text-soft' : 'shiny-text';

  return (
    <span className={`${shinyClass} ${className}`}>
      {text}
    </span>
  );
};

export default ShinyText;
