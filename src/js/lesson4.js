document.addEventListener("DOMContentLoaded", function(event) {

    let arr = [],
        count = prompt('How many arrays?'),
        numbers = prompt('How many numbers?'),
        min = +prompt('Minimal number?'),
        max = +prompt('Maximal number?'),
        summ = 0;

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < numbers; j++) {
            arr[i] = [];
            for (let j = 0; j < numbers; j++) {
                    arr[i][j] = Math.floor(Math.random() * (max - min)) + min;
            }
        }
    };
    // console.log(arr);

    /*for (let i = arr.length; i--;) {
        for (let j = arr[i].length; j--;) {
            summ += +arr[i][j];
        }
    }; первый вариант */


    arr.forEach(function(item,i){
        document.getElementById('arrays').innerHTML += '<br>[' + item + ']';
        arr[i].forEach(function(item,j){
            summ += arr[i][j];
        });
    });
    document.getElementById('summ').innerHTML += '<br>\
                                                Сумма всех элементов в массивах:\
                                                <br>' + summ ;
    // console.log(summ);
    
});