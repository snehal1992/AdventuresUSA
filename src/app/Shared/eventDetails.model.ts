export class EventDetails {
  public location: string;
  public date: string;
  constructor(loc: string, date: string) {
    this.date = date;
    this.location = loc;
  }
}
