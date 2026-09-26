import { reverseString } from "./reverse-string";
test('Reversed string "Apple" should return "elppA"', ()=>{
    expect(reverseString('Apple')).toBe('elppA');
});
test('Reversed sentence should be returned', ()=>{
    expect(reverseString('This is my sentence.')).toBe('.ecnetnes ym si sihT');
});
test('Empty string should return empty', ()=>{
    expect(reverseString('')).toBe('');
});
test('Number argument should throw error', ()=>{
    expect(()=>reverseString(123)).toThrow('Please enter a string to reverse');
});
test('Non string arguments should throw an error', ()=>{
    const testCases = [{}, [], undefined, null];
    testCases.forEach(test=>{
        expect(()=>reverseString(test)).toThrow('Please enter a string to reverse');
    });
});