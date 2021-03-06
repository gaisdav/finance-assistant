import { ICalendarDM } from "./interfaces";
import { makeAutoObservable } from "mobx";

export class CalendarDM implements ICalendarDM {
  readonly date: number;
  readonly day: number;
  month: number;
  year: number;

  readonly currentDate: number;
  readonly currentDay: number;
  currentMonth: number;
  currentYear: number;

  constructor() {
    const dateObj: Date = new Date();

    this.date = dateObj.getDate();
    this.year = dateObj.getFullYear();
    this.day = dateObj.getDay();
    this.month = dateObj.getMonth();

    this.currentDate = dateObj.getDate();
    this.currentYear = dateObj.getFullYear();
    this.currentDay = dateObj.getDay();
    this.currentMonth = dateObj.getMonth();

    makeAutoObservable(this);
  }
}
