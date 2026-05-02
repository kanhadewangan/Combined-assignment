// Problem Statement:
// Write a function createPair that takes two arguments of any type and returns a tuple with those values.


export function createPair<T, U>(value1: T, value2: U): [T, U] {
    return [value1, value2];
}