
exports.min = function min (array) {
    if(!array || array.length === 0) {
        return 0;
    }
    else {
        let temp = array[0];
        for(let i = 1; i < array.length; i++) {
            if(array[i] < temp) {
                temp = array[i]
            }
        }
        return temp;
    }
}

exports.max = function max (array) {
    if(!array || array.length === 0) {
        return 0;
    }
    else {
        let temp = array[0];
        for(let i = 1; i < array.length; i++) {
            if(array[i] > temp) {
                temp = array[i]
            }
        }
        return temp;
    }
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) {
        return 0;
    }
    else {
       let sum = array.reduce((acc, item) => (acc + item), 0);
       return sum / array.length
    }
}
