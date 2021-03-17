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
}) => {
  const { inputError, error } = styles;

  const inputStyles = classNames(Boolean(errorText) && inputError);

  return (
    <>
      {labelText && (
        <div>
          <label aria-required="true" htmlFor={htmlFor}>
            {labelText}
          </label>
          {require && <sup>*</sup>}
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
    </>
  );
};

export default Input;
