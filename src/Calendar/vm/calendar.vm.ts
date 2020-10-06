import CalendarService from "../service/calendar.service";

class CalendarVm {
  constructor(private _service: CalendarService) {}

  get monthDays(): IDay[][] {
    return this._service.monthDays;
  }

  get monthString(): string {
    return this._service.monthString;
  }

  incrementMonth = () => {
    this._service.incrementMonth();
  };

  decrementMonth = () => {
    this._service.decrementMonth();
  };
}

export default CalendarVm;
