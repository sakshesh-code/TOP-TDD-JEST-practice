// Tests where parameters are not numbers
// no parameters
// null, undefined, string, empty string, boolean 
export const calculator = {
    add(a, b){
        if(a === null || a === undefined || typeof a === 'string' || typeof a === 'boolean'){
            throw new Error('Please enter a number');
        } 
        if(b === null || b === undefined || typeof b === 'string' || typeof b === 'boolean'){
            throw new Error('Please enter a number');
        }
        return a + b;
    },
    subtract(a, b){
        if(a === null || a === undefined || typeof a === 'string' || typeof a === 'boolean'){
            throw new Error('Please enter a number');
        } 
        if(b === null || b === undefined || typeof b === 'string' || typeof b === 'boolean'){
            throw new Error('Please enter a number');
        }
        return a - b;
    },
    divide(a, b){
        if(a === null || a === undefined || typeof a === 'string' || typeof a === 'boolean'){
            throw new Error('Please enter a number');
        } 
        if(b === null || b === undefined || typeof b === 'string' || typeof b === 'boolean'){
            throw new Error('Please enter a number');
        }
        return a / b;
    },
    multiply(a, b){
        if(a === null || a === undefined || typeof a === 'string' || typeof a === 'boolean'){
            throw new Error('Please enter a number');
        } 
        if(b === null || b === undefined || typeof b === 'string' || typeof b === 'boolean'){
            throw new Error('Please enter a number');
        }
        return a * b;
    }
};
