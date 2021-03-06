import { makeAutoObservable } from "mobx";
import { ICalendarVM, IDay } from "../../View/pages/Calendar/interfaces";
import { ICalendarDM } from "../../DomainModels/CalendarDM/interfaces";

class CalendarVM implements ICalendarVM {
  get year(): number {
    return this.domainModel.year;
  }

  get month(): number {
    return this.domainModel.month;
  }

  get date(): number {
    return this.domainModel.date;
  }

  get currentYear(): number {
    return this.domainModel.currentYear;
  }

  get currentMonth(): number {
    return this.domainModel.currentMonth;
  }

  get currentDate(): number {
    return this.domainModel.currentDate;
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

        const isToday =
          currDate.getDate() === this.date &&
          currDate.getMonth() === this.currentMonth;

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

  // TODO доделать
  // get weekDays(): IDay[][] {
  //   const firstDayNumber = new Date(this.year, this.month, 0).getDay();
  //   let month: IDay[][] = [];
  //   let date: number = 1 - firstDayNumber;
  //
  //   for (let week = 0; week < 6; week++) {
  //     let weekArray = [];
  //
  //     for (let day = 0; day < 7; day++) {
  //       const currDate = new Date(this.year, this.month, date);
  //
  //       const isCurrentMonthDay = currDate.getMonth() === this.month;
  //
  //       const isToday =
  //         currDate.getDate() === this.date &&
  //         new Date().getMonth() === this.month;
  //
  //       weekArray.push({
  //         value: currDate.getDate(),
  //         isToday,
  //         isCurrentMonthDay,
  //         isWeekendDay: day > 4,
  //       });
  //
  //       date++;
  //     }
  //
  //     month.push(weekArray);
  //   }
  //
  //   return month;
  // }

  constructor(private domainModel: ICalendarDM) {
    makeAutoObservable(this);
  }

  incrementMonth = () => {
    if (this.domainModel.month === 11) {
      this.domainModel.month = 0;
      ++this.domainModel.year;
    } else {
      ++this.domainModel.month;
    }
  };

  decrementMonth = () => {
    if (this.domainModel.month === 0) {
      this.domainModel.month = 11;
      --this.domainModel.year;
    } else {
      --this.domainModel.month;
    }
  };
}

export default CalendarVM;
