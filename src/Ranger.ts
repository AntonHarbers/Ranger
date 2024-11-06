export class Ranger {
  start: number;
  end: number;
  step: number;
  constructor(start: number, end: number, step: number = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  valueOf(): number {
    return this.toArray().reduce((cur: number, sum: number) => (sum += cur), 0);
  }

  toString(): string {
    return this.toArray().join(',');
  }

  [Symbol.iterator](): Iterator<number> {
    let current = this.start;
    let end = this.end;
    let step = this.step;

    return {
      next(): IteratorResult<number> {
        if ((step > 0 && current <= end) || (step < 0 && current >= end)) {
          let value = current;
          current += step;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  getRandom(): number {
    const rangeSize: number =
      Math.floor((this.end - this.start) / this.step) + 1;
    const randomIndex: number = Math.floor(Math.random() * rangeSize);
    return this.start + randomIndex * this.step;
  }

  contains(num: number): boolean {
    if (this.step > 0) {
      return (
        num >= this.start &&
        num <= this.end &&
        (num - this.start) % this.step === 0
      );
    } else {
      return (
        num <= this.start &&
        num >= this.end &&
        (num - this.start) % this.step === 0
      );
    }
  }

  toArray(): number[] {
    return [...this];
  }

  toReverseArray(): number[] {
    return this.toArray().reverse();
  }

  get length(): number {
    return Math.floor((this.end - this.start) / this.step) + 1;
  }

  reverse(): void {
    [this.start, this.end] = [this.end, this.start];
    this.step = -this.step;
  }

  filter(callback: (value: number) => boolean): number[] {
    return this.toArray().filter(callback);
  }

  map(callback: (value: number) => number): number[] {
    return this.toArray().map(callback);
  }

  clone(): Ranger {
    return new Ranger(this.start, this.end, this.step);
  }
}
