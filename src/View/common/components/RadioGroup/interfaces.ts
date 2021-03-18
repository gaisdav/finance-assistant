export interface IProps {
  /**
   * Признак обязательности выбора
   */
  require?: boolean;
  /**
   * Кнопки
   */
  radioButtons: IRadioButton[];
  /**
   * Метод для отслеживания изменения поля
   */
  onChange: () => void;
  /**
   * Текст ошибки
   */
  errorText?: string;
  /**
   * Название поля
   */
  labelText?: string;
  /**
   * Значение атрибута name
   */
  groupName: string;
}

interface IRadioButton {
  /**
   * Значение поля
   */
  value: string;
  /**
   * Название поля
   */
  label?: string;
  /**
   * Текст ошибки
   */
  htmlFor?: string;
}
