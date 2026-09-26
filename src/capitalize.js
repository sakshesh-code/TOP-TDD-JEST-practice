export function capitalizeFirst(string){
    if(typeof string !== 'string'){
        throw new Error('Please enter a string');
    }
    return string.length === 0 ? string : string[0].toUpperCase() + string.slice(1);
};
