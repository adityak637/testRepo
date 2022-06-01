import React, { useState } from 'react';

const Input = ({ type, name, onchange, testid, hasIcon, error, value, placeholder, maxlength }) => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  let errorClass = (error != "") && (value == "") ? 'form-control has-error' : 'form-control';
  return (
    <React.Fragment>
      {hasIcon ?
        <>
          <span
            data-testid="eye-icon"
            className={`${value.length ? (isRevealPwd ? 'show' : 'hide') : "disabled"} icon`}
            onClick={value.length ? () => setIsRevealPwd(prevState => !prevState) : null}></span>
          <input
            type={isRevealPwd ? "text" : "password"}
            name={name}
            className={errorClass}
            onChange={onchange}
            placeholder={placeholder}
            maxLength={maxlength}
            data-testid={testid}
            value={value}
          /></>
        :
        <input
          type={type}
          name={name}
          className={errorClass}
          onChange={onchange}
          placeholder={placeholder}
          maxLength={maxlength}
          data-testid={testid}
          value={value}
        />}
    </React.Fragment>
  )
}

export default Input;