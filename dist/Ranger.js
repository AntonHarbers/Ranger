"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ranger = void 0;
class Ranger {
    constructor(start, end, step = 1) {
        this.start = start;
        this.end = end;
        this.step = step;
    }
    valueOf() {
        return this.toArray().reduce((cur, sum) => (sum += cur), 0);
    }
    toString() {
        return this.toArray().join(',');
    }
    [Symbol.iterator]() {
        let current = this.start;
        let end = this.end;
        let step = this.step;
        return {
            next() {
                if ((step > 0 && current <= end) || (step < 0 && current >= end)) {
                    let value = current;
                    current += step;
                    return { value, done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            },
        };
    }
    getRandom() {
        const rangeSize = Math.floor((this.end - this.start) / this.step) + 1;
        const randomIndex = Math.floor(Math.random() * rangeSize);
        return this.start + randomIndex * this.step;
    }
    contains(num) {
        if (this.step > 0) {
            return (num >= this.start &&
                num <= this.end &&
                (num - this.start) % this.step === 0);
        }
        else {
            return (num <= this.start &&
                num >= this.end &&
                (num - this.start) % this.step === 0);
        }
    }
    toArray() {
        return [...this];
    }
    toReverseArray() {
        return this.toArray().reverse();
    }
    get length() {
        return Math.floor((this.end - this.start) / this.step) + 1;
    }
}
exports.Ranger = Ranger;
