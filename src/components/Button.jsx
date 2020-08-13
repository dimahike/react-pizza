import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'button',
        {
          'button--outline': outline,
        },
        className,
      )}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
