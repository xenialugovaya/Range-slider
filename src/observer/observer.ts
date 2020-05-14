export default class EventObserver {
  private observers: Function[];

  constructor() {
    this.observers = [];
  }

  public getSubscribers(): Function[] {
    return this.observers;
  }

  public broadcast(data: object): void {
    this.observers.forEach((subscriber) => subscriber(data));
  }

  public subscribe(fn: Function): void {
    this.observers.push(fn);
  }

  public unsubscribe(fn: Function): void {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }
}
