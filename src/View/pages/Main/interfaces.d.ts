export interface IDay {
  value: number;
  isToday: boolean;
  isWeekendDay: boolean;
  isCurrentMonthDay: boolean;
}

export interface ICalendarVM {
  monthDays: IDay[][];
  year: number;
  month: number;
  date: number;
  monthTitle: string;
  incrementMonth: () => void;
  decrementMonth: () => void;
}
