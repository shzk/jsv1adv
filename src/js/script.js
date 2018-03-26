/* Advanced */

let num = 33721;

num = num + ''; /* stringify int */
let arr = num.split(''); /* create array from splitted string */
function arraySum(array) {
    let summ = array[0];
    for (let i = 1; i < array.length; i++ ) {
        summ *= array[i];
    }
    return summ;
}
let summ = arraySum(arr); /* multiply array items with arraySum function */
console.log( 'num elements multiplied = ' + summ); /* print multiplied summ to console */

let powedSumm = Math.pow(summ, 3); /* raise 3rd power */
document.getElementById('pow-result').innerHTML = 'Результат перемножения = ' + powedSumm; /* write powed value to specified id */