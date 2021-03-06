export interface IDay {
  value: number;
  isToday: boolean;
  isWeekendDay: boolean;
  isCurrentMonthDay: boolean;
}

export interface ICalendarVM {
  // weekDays: [IDay, IDay, IDay, IDay, IDay, IDay, IDay];
  monthDays: IDay[][];
  year: number;
  month: number;
  date: number;
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  monthTitle: string;
  incrementMonth: () => void;
  decrementMonth: () => void;
}
