interface IDay {
  value: number;
  isToday: boolean;
  isWeekendDay: boolean;
  isCurrentMonthDay: boolean;
}

interface ICalendarVM {
  monthDays: IDay[][];
  year: number;
  month: number;
  date: number;
  monthString: string;
  incrementMonth: () => void;
  decrementMonth: () => void;
}
