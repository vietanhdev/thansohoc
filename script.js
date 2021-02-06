var PYTHAGOREAN = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 1,
    'k': 2,
    'l': 3,
    'm': 4,
    'n': 5,
    'o': 6,
    'p': 7,
    'q': 8,
    'r': 9,
    's': 1,
    't': 2,
    'u': 3,
    'v': 4,
    'w': 5,
    'x': 6,
    'y': 7,
    'z': 8
};


$(function () {


    var input = document.querySelector('input');
    var button = document.querySelector('button');
    var result = document.querySelector('.result');

    function calculate() {

        console.log("Calculating...");

        // Extract date
        let date = new Date($('#birthday').val());
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        $("#result").html("");
        $("#result").append('<h2 class="text-center mb-4">Kết quả:</h3>');
        
        let bhdd = calcBhdd(day, month, year);
        $("#result").append('<p><b>Bài học đường đời (BHDD) = </b>' + bhdd + '</p>');


        // result.innerHTML = '';

        // // Print results
        // printResult(PYTHAGOREAN, 'Pythagoras');
    }


    function reduceSumPythagoras(num) {

        let rsum = num;

        if (![11, 22, 33].includes(rsum) && String(rsum).length > 1) {
            rsum = String(num)
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0);
            console.log(rsum);
        }
        
        return rsum;
    }


    function calcBhdd(day, month, year) {

        console.log("BHDD:");

        // Step 1
        let x1 = reduceSumPythagoras(day);
        console.log("x1 = " + x1);

        // Step 2
        let x2 = reduceSumPythagoras(month);
        console.log("x2 = " + x2);

        // Step 3
        let x3 = reduceSumPythagoras(year);
        console.log("x3 = " + x3);

        // Step 4
        let x4 = x1 + x2 + x3;
        console.log("x4 = " + x4);

        // Step 5
        let x5 = reduceSumPythagoras(x4);
        console.log("x5 = " + x5);

        return x5;

    }


    $("#calculate-btn").click(calculate);

    // Print list
    function printResult(list, text) {
        var letters = input.value.toLowerCase().replace(/[^0-9a-z]/g, '').split('');
        var sum = 0,
            l, i;
        for (i = 0; i < letters.length; i++) {
            // Extract letter from array
            l = letters[i];

            // Lookup or convert letter and add to sum
            sum += list[l] || parseInt(l);
        }

        // Write the sum to screen
        result.innerHTML += '<div class="result-text">' + text + ' ' + sum + '</div>';
    }

});