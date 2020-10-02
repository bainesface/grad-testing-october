import React from 'react';

const variantMap = {
  info: 'alert--info',
  success: 'alert--success',
  error: 'alert--error',
};

export const Alert = ({
  children,
  variant = 'info',
  topLine,
  testId = 'alert-component',
}) => {
  return (
    <div
      data-testid={testId}
      role="alert"
      className={`alert ${variantMap[variant]} ${
        topLine ? 'alert--top-border' : ''
      }`}
    >
      {children}
    </div>
  );
};
