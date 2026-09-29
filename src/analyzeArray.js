export function analyzeArray(array){
    if(array.length === 0){
        throw new Error('Array cant be empty');
    }
    const obj = array.reduce((acc, curr)=>{
        acc.min = Math.min(acc.min, curr);
        acc.max = Math.max(acc.max, curr);
        acc.sum += curr;
        return acc;
    }, {
        average: 0,
        min: array[0],
        max: array[0],
        length: array.length,
        sum: 0
    });
    obj.average = obj.sum/obj.length;
    delete obj.sum;
    
    return obj;
};
