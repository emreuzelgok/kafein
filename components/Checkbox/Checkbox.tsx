import React, { ChangeEvent, FC, useState } from 'react';
import Check from '../Svg/check.svg';

import './Checkbox.scss';

type CheckboxProps = JSX.IntrinsicElements['input'] & {
  label?: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox:FC<CheckboxProps> = ({ label, name, onChange, checked, }) => {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="checkbox" checked={checked} onChange={onChange} name={name} />
      <span className="checkbox__checkmark"><Check /></span>
      <span className="checkbox__label">{label}</span>
    </label>
  );
}

export default Checkbox;
