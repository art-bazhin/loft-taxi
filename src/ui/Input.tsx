import React from 'react';

import './Input.css';

interface InputProps {
  onInput?: (value: string) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  onInput,
  label,
  placeholder,
  type,
  name
}) => {
  const handleInput = (e: React.SyntheticEvent) => {
    if (onInput) onInput((e.target as HTMLInputElement).value);
  };

  return (
    <label className="Input">
      {label && <span className="Input__label">{label}</span>}
      <input
        onInput={handleInput}
        type={type}
        name={name}
        placeholder={placeholder}
        className="Input__field"
      />
    </label>
  );
};
