// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT
const Button = ({ className, label, onClick }) => (
  <button type="button" className={className} onClick={onClick}>{label}</button>
);

// PROPS VALIDATION
Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// EXPORT
export default Button;
