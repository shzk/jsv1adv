document.addEventListener("DOMContentLoaded", function(event) {
   
    let str = 'урок-3-был слишком легким';

    function upperFirst(str) {
     if (!str) return str;
     return str = str[0].toUpperCase() + str.slice(1);
    };

    str = upperFirst(str);
    console.log(str);

    str = str.replace(/-/g, ' ');
    console.log(str);

    let words = str.split(' ');
    function findWord(search){
        for (let i = 0; i < words.length; i++) {
            if (words[i] === search) {
                word = words[i];
            }
        };
    };
    findWord('легким'); //можно сразу найти нужную подстроку с помощью typeOf, но более универсальный вариант кажется лучше
    
    word = word.slice(0, word.length - 2);
    word += 'о';
    document.getElementById("word").innerHTML = word;
    //можно сделать функцией, передать 2 параметра - какое количество символов с конца убрать и строку для замены, но тут и так все просто

    let arr = [20, 33, 1, 'Человек', 2, 3];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result += Math.pow(3, arr[i]);
        }
    };
    result = Math.sqrt(result);
    console.log(result);
});

