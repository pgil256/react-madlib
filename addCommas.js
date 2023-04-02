function addCommas(num) {
    let numArray = new Array(...num.toString())
        if(numArray[0] === '-') {
            numArray = [numArray[0].concat(numArray[1]), ...numArray.slice(2)];
        }

        for (let i = numArray.length; i > 0; i -= 3) {
            numArray.splice(i, 0, ',');
        }
        numArray.pop();
    
        return numArray.join('')
}

module.exports = addCommas;



