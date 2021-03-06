import React, { ChangeEvent } from 'react';
import './ShortTextInput.css';

interface Props {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function ShortTextInput({
  value, onChange, placeholder, required, type, name, maxLength, minLength, min, max,
}: Props) {
  return (
    <input
      className="ShortTextInput"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`${placeholder ?? ''}${required ? '*' : ''}`}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      type={type ?? 'text'}
      min={min}
      max={max}
    />
  );
}
