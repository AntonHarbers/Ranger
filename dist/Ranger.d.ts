export declare class Ranger {
    start: number;
    end: number;
    step: number;
    constructor(start: number, end: number, step?: number);
    valueOf(): number;
    toString(): string;
    [Symbol.iterator](): Iterator<number>;
    getRandom(): number;
    contains(num: number): boolean;
    toArray(): number[];
    toReverseArray(): number[];
    get length(): number;
}
