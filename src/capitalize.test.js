import { capitalizeFirst } from "./capitalize";
test('Capitalized first letter in apple', ()=>{
    expect(capitalizeFirst('apple')).toBe('Apple');
});
test('Capitalized first letter in a sentence', ()=>{
    expect(capitalizeFirst('this is a sentence.')).toBe('This is a sentence.');
});
test('Capitalized number throws an error', ()=>{
    expect(()=>capitalizeFirst(21)).toThrow('Please enter a string');
});
test('Capitalized non string throws an error', ()=>{
    const testCases = [null, undefined, {}, []];
    testCases.forEach(test=>{
        expect(()=>capitalizeFirst(test)).toThrow('Please enter a string');
    });
});
test('Capitalize empty string should return empty', ()=>{
    expect(capitalizeFirst('')).toBe('');
});