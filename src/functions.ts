
function add(value: number, value2: number): number {
    return value + value2;
}

function subtract(value: number, value2: number) : number {
    return value - value2;
}

function multiply(value: number, value2: number): number {
    return value * value2;
}

function divide(value: number, value2: number) : number {
    return value * value2;
}

function toPrint(): void {
    console.log(add(2,6));
}

const throwError = () : never => {
    throw new Error('this not work');
}

toPrint();