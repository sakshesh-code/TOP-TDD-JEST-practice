//add, subtract, divide and multiply methods in calculator object 
//functions should take 2 numbers and return calculations
import {calculator} from './calculator.js';
// Tests expecting numbers as parameters
test('calculator.add(1, 2) should return 3', ()=>{
    expect(calculator.add(1, 2)).toBe(3);
});
test('calculator.subtract(3, 2) should return 1', ()=>{
    expect(calculator.subtract(3, 2)).toBe(1);
});
test('calculator.divide(4, 2) should return 2', ()=>{
    expect(calculator.divide(4, 2)).toBe(2);
});
test('calculator.multiply(5, 4) should return 20', ()=>{
    expect(calculator.multiply(5, 4)).toBe(20);
});
// Tests where parameters are not numbers
// no parameters
// null, undefined, string, empty string, boolean 
test('calculator methods with non number values should return error', ()=>{
    const testCases = [null, undefined, 'some string', '', true, false];
    for(const method in calculator){
        testCases.forEach(test=>{
            expect(()=>{
                calculator[method](null, 1) || calculator[method](3, null)
            }).toThrow('Please enter a number');
        })
    }
});
