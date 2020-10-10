import { observable, action, computed, runInAction } from "mobx";

class CalendarVM implements ICalendarVM {
  @observable private readonly _date: number;
  @observable private readonly _day: number;
  @observable private _month: number;
  @observable private readonly _year: number;

  @computed
  get year(): number {
    return this._year;
  }

  @computed
  get month(): number {
    return this._month;
  }

  @computed
  get date(): number {
    return this._date;
  }

  @computed
  get monthString(): string {
    return new Date(this.year, this.month, this.date).toLocaleString(
      "default",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  }

  @computed
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
  }

  @action.bound incrementMonth = () => {
    runInAction(() => {
      ++this._month;
    });

    console.log("incrementMonth", this._month);
  };

  @action.bound decrementMonth = () => {
    --this._month;
    console.log("decrementMonth", this._month);
  };
}

export default CalendarVM;
