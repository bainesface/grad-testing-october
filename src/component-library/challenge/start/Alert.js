import React from 'react';

export const Alert = ({
  children,
  type = 'info',
  position = 'left-border',
  testId = 'alert-component',
}) => {
  return (
    <div
      aria-labelledby={`alert-${type}`}
      className={`alert alert--${type} alert--${position}`}
      data-testid={testId}
    >
      {children}
    </div>
  );
};

export default Alert;
