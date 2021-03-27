import { FC } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { IProps } from "./interfaces";

const Input: FC<IProps> = ({
  labelText,
  onChange,
  value,
  require,
  errorText,
  htmlFor,
  className = "",
}) => {
  const { inputError, error, sup, input, label } = styles;

  const inputStyles = classNames([input, Boolean(errorText) && inputError]);

  return (
    <div className={className}>
      {labelText && (
        <div className={label}>
          <label aria-required="true" htmlFor={htmlFor}>
            {labelText}
          </label>
          {require && <sup className={sup}>*</sup>}
        </div>
      )}

      <input
        className={inputStyles}
        id={htmlFor}
        type="text"
        onChange={onChange}
        value={value}
      />

      <div>{errorText && <sub className={error}>{errorText}</sub>}</div>
    </div>
  );
};

export default Input;
