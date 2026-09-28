export function caesarCipher(str, shift){
    if(typeof str !== 'string'){
        throw new Error('The first argument should be a string!!');
    }else if(typeof shift !== 'number'){
        throw new Error('The second argument should be a number!!');
    };

    let encryptedValue = '';

    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        if(code < 65 || (code > 90 && code < 97) || code > 122){
            encryptedValue += str[i];
            continue;
        }
        const range = checkUnicodeRange(code);
        // if shift exceedes the last letter of alphabet total(26) letters is subtracted to wrap the text
        const shifted = (code + shift) > range.max ? (code + shift - 26) : code + shift;
        encryptedValue += String.fromCharCode(shifted);
    };

    return encryptedValue;
};

function checkUnicodeRange(code){
    if(code >= 65 && code <= 90){
        return {
            min: 65, 
            max: 90,
        }
    }else if(code >=97 && code <= 122){
        return{
            min: 97, 
            max: 122,
        }
    };
};