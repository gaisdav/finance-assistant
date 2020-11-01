import { makeAutoObservable } from "mobx";
import { ICalendarVM, IDay } from "../../View/pages/Main/interfaces";

class CalendarVM implements ICalendarVM {
  private readonly _date: number;
  private readonly _day: number;
  private _month: number;
  private _year: number;

  get year(): number {
    return this._year;
  }

  get month(): number {
    return this._month;
  }

  get date(): number {
    return this._date;
  }

  get monthTitle(): string {
    return new Date(this.year, this.month, this.date).toLocaleString(
      "default",
      {
        year: "numeric",
        month: "long",
      }
    );
  }

  get monthDays(): IDay[][] {
    const firstDayNumber = new Date(this.year, this.month, 0).getDay();
    let month: IDay[][] = [];
    let date: number = 1 - firstDayNumber;

    for (let week = 0; week < 6; week++) {
      let weekArray = [];

      for (let day = 0; day < 7; day++) {
        const currDate = new Date(this.year, this.month, date);

        const isCurrentMonthDay = currDate.getMonth() === this.month;

        const isToday = currDate.getDate() === this.date && isCurrentMonthDay;

        weekArray.push({
          value: currDate.getDate(),
          isToday,
          isCurrentMonthDay,
          isWeekendDay: day > 4,
        });

        date++;
      }

      month.push(weekArray);
    }

    return month;
  }

  constructor() {
    const dateObj: Date = new Date();

    this._date = dateObj.getDate();
    this._year = dateObj.getFullYear();
    this._day = dateObj.getDay();
    this._month = dateObj.getMonth();

    makeAutoObservable(this);
  }

  incrementMonth = () => {
    if (this._month === 11) {
      this._month = 0;
      ++this._year;
    } else {
      ++this._month;
    }
  };

  decrementMonth = () => {
    if (this._month === 0) {
      this._month = 11;
      --this._year;
    } else {
      --this._month;
    }
  };
}

export default CalendarVM;
