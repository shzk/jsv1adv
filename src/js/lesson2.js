document.addEventListener("DOMContentLoaded", function(event) {
    let week = ['Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'], //array ready
                output = document.getElementById("week"),
        date = new Date(), //getting date
        currentDay = date.getDay(); //getting day number in a week, adding 1 because arrays counted from 0

    for (i = 0; i < week.length; i++) {
        
        if (i == currentDay) {
            output.innerHTML += '<p><i>' + week[i] + '</i></p>'
            // console.log(week[i] + 'i')
        } else if (i == 5 || i ==6) {
            output.innerHTML += '<p><b>' + week[i] + '</b></p>'
            } else {
            output.innerHTML += '<p>' + week[i] + '</p>'
        }
    };

    let arr = [
            '27349',
            '2316549',
            '346',
            '74',
            '4654',
            '77794',
            '3164984'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 3 || arr[i][0] == 7) {
            console.log(arr[i])
        }
    }

});

