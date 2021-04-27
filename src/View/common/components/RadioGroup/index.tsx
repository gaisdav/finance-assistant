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
  const { sup, error, radioWrapper, radio, radioLabel } = styles;

  return (
    <div>
      {labelText && (
        <label>
          {labelText} {require && <sup className={sup}>*</sup>}
        </label>
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
          <label
            data-customize="reset"
            htmlFor={button.htmlFor}
            className={radioLabel}
          >
            {button.label}
          </label>
        </span>
      ))}

      {errorText && <div className={error}>{errorText}</div>}
    </div>
  );
};

export default RadioGroup;
