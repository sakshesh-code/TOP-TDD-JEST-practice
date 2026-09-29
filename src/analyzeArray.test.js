import {analyzeArray} from './analyzeArray.js';
test(`analyzeArray([1,8,3,4,2,6]) should return 
        an object {
                     average: 4,
                     min: 1,
                     max: 8,
                     length:6    
                        }`, ()=>{
                            expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
                                average: 4,
                                min: 1,
                                max: 8,
                                length: 6
                            });
                        });

// Test case for empty array
test('Array cant be empty', ()=>{
    expect(()=>analyzeArray([])).toThrow('Array cant be empty');
});