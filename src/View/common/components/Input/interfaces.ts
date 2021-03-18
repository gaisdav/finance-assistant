/**
 * Интерфейс компонента Input.
 */
export interface IProps {
  /**
   * Признак обязательности поля
   */
  require?: boolean;
  /**
   * Значение поля
   */
  value?: string;
  /**
   * Название поля
   */
  labelText?: string;
  /**
   * Метод для отслеживания изменения поля
   */
  onChange: () => void;
  /**
   * Текст ошибки
   */
  errorText?: string;
  /**
   * Текст ошибки
   */
  htmlFor?: string;
}
