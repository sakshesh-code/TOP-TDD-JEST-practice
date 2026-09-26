export function reverseString(str){
    if(typeof str !== 'string'){
        throw new Error('Please enter a string to reverse');
    }
    return str.length === 0 ? str : str.split('').reverse().join('');
}