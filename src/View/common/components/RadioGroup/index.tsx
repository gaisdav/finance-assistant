import { FC } from "react";
import { IProps } from "./interfaces";
import styles from "./styles.module.scss";

const RadioGroup: FC<IProps> = ({
  radioButtons,
  labelText,
  require,
  errorText,
  onChange,
  groupName,
}) => {
  const { label, sup, error, radioWrapper, radio, radioLabel } = styles;

  return (
    <div>
      {labelText && (
        <div className={label}>
          {labelText}
          {require && <sup className={sup}>*</sup>}
        </div>
      )}

      {radioButtons.map((button, index) => (
        <span key={button.value + index} className={radioWrapper}>
          <input
            className={radio}
            name={groupName}
            id={button.htmlFor}
            type="radio"
            value={button.value}
          />
          <label htmlFor={button.htmlFor} className={radioLabel}>
            {button.label}
          </label>
        </span>
      ))}

      <div>{errorText && <sub className={error}>{errorText}</sub>}</div>
    </div>
  );
};

export default RadioGroup;
