import {caesarCipher} from './caesar-cipher.js';

test('caesarCypher("abc", 3) should return "def"', ()=>{
    expect(caesarCipher('abc', 3)).toBe('def');
});
test('caesarCypher("HeLLo", 3) should return "KhOOr"', ()=>{
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('caesarCypher("xyz", 3) should return "abc"', ()=>{
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('caesarCypher("Hello! @user_Agent", 3) should return "Khoor! @xvhu_Djhqw"', ()=>{
    expect(caesarCipher('Hello! @user_Agent', 3)).toBe('Khoor! @xvhu_Djhqw');
});
test("caesarCipher('Hello, World!', 3) should return ", ()=>{
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// test for edge cases and wrong type
test('First argument being non string should throw an error', ()=>{
    const testCases = [123, null, undefined, true, false];
    testCases.forEach(test=>{
        expect(()=>caesarCipher(test, 3)).toThrow('The first argument should be a string!!');
    });
});
test('Second argument should be a number', ()=>{
    const testCases = ['abc', '', null, undefined, true, false];
    testCases.forEach(test=>{
        expect(()=>caesarCipher('string', test)).toThrow('The second argument should be a number!!');
    });
});