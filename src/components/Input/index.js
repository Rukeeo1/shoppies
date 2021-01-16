import React from 'react';
import './index.scss'

export default function Input({
  icon,
  iconPosition,
  name,
  onChange,
  onBlur,
  placeholder,
  value,
  label,
  errorMessage,
  type,
  onKeyPress,
  disabled,
  onIconClick,
  ...rest
}) {
  return (
    <div className={`alt-input ${iconPosition}`}>
      <label>{label}</label>
      {icon && (
        <span>
          <img src={icon} onClick={onIconClick} alt="icon" />
        </span>
      )}
      <input
        onChange={onChange}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={disabled}
        {...rest}
      />
      {/* <FormError errorMessage={errorMessage} /> */}
    </div>
  );
}
