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



function removeAccent(str) {

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;

}


function preprocessStr(str) {
    
    str = str.toLowerCase();
    str = removeAccent(str);
    str = str.replace(/[^a-z\s]/gi, ' ');
    str = str.replace(/\s+/g, ' ');
    str.trim();

    return str.split(" ");
}


function reduceSumPythagoras(num) {

    if (isNaN(num)) {
        return 0;
    } 

    let rsum = num;

    while (![11, 22, 33].includes(rsum) && String(rsum).length > 1) {
        rsum = String(rsum)
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    }
    
    return rsum;
}


function calcWordValue(word, mode="ALL") {

    console.log("Calculating word value for: " + word);

    if (word.length == 0) {
        return 0;
    }

    let wordValue = 0;
    let letters = word.split('');

    if (mode == "DLBT") {

        console.log("DLBT");

        for (let i = 1; i < letters.length; ++i) {
            // Remove y if y lies after a vowel
            if (letters[i] == "y" && "ueoai".includes(letters[i-1])) {
                letters[i] = ".";
            }
        }

        for (let i = 0; i < letters.length; ++i) {
            // Only keep u, e, o, a, i, y
            if (!"ueoaiy".includes(letters[i])) {
                letters[i] = ".";
            }
        }

        console.log(letters);
        
    } else if (mode == "NC") {

        console.log("NC");

        if (letters[0] == "y") {
            letters[0] = ".";
        }

        for (let i = 1; i < letters.length; ++i) {
            if (letters[i] == "y" && !"ueoai".includes(letters[i-1])) {
                letters[i] = ".";
            }
        }

        for (let i = 0; i < letters.length; ++i) {
            if ("ueoai".includes(letters[i])) {
                letters[i] = ".";
            }
        }

        console.log(letters);
    }

    for (let i = 0; i < letters.length; ++i) {
        if (letters[i] in PYTHAGOREAN) {
            wordValue += PYTHAGOREAN[letters[i]];
        }
    }
    
    console.log("Value: " + wordValue);
    wordValue = reduceSumPythagoras(wordValue);

    return wordValue

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


function calcNltn(words) {

    let sum = 0;
    for (let i = 0; i < words.length; ++i) {
        sum += calcWordValue(words[i]);
    }

    sum = reduceSumPythagoras(sum);
    return sum;

}


function calcDlbt(words) {

    let sum = 0;
    for (let i = 0; i < words.length; ++i) {
        sum += calcWordValue(words[i], mode="DLBT");
    }

    sum = reduceSumPythagoras(sum);
    return sum;

}


function calcNc(words) {

    let sum = 0;
    for (let i = 0; i < words.length; ++i) {
        sum += calcWordValue(words[i], mode="NC");
    }

    sum = reduceSumPythagoras(sum);
    return sum;

}


$(function () {

    $(".loading-icon").hide();
    $.ajaxSetup({async:false});

    function getData(url) {
        $.get(url, function(data) {
            let content = $("#result", data).html(); // finds <div id='mainDiv'>...</div>
            $("#result").append(content);
        }, "html");
    }


    function calculateBtnClick() {

        // Extract date
        let date = new Date($('#birthday').val());
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let name = $("#name").val();

        if (name.length == 0) {
            alert("Xin hãy nhập tên của bạn.");
            return;
        }

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert("Xin hãy kiểm tra lại ngày sinh.");
            return;
        }

        // Clear old content and show loading icon
        $("#result").html("");
        $(".loading-icon").show();

        // Delay a little to show loading icon
        setTimeout(function() {
            // Run calculation
            calculate(day, month, year, name);
            // Hide loading icon
            $(".loading-icon").hide();
        }, 1000);

    }


    function calculate(day, month, year, name) {

        console.log("Calculating...");
        $("#result").append('<h2 class="text-center mb-4">Kết quả:</h3>');
        
        let bhdd = calcBhdd(day, month, year);
        $("#result").append('<p class="calculation-steps"><b>Bài học đường đời (BHDD) = ' + bhdd + '</b>. <a href="/posts/cach-tinh/bhdd" target="_blank">Xem cách tính.</a></p>');
        if (bhdd != 0) {
            getData("/posts/bhdd/" + bhdd);
        }

        let words = preprocessStr(name);
        console.log("Preprocessed name: " + words);

        let nltn = calcNltn(words);
        $("#result").append('<p class="calculation-steps"><b>Năng lực tự nhiên (NLTN) = ' + nltn + '</b>. <a href="/posts/cach-tinh/dlbt-nltn-nc" target="_blank">Xem cách tính.</a></p>');
        if (nltn != 0) {
            getData("/posts/nltn/" + nltn);
        }

        let dlbt = calcDlbt(words);
        $("#result").append('<p class="calculation-steps"><b>Động lực bên trong (ĐLBT) = ' + dlbt + '</b>. <a href="/posts/cach-tinh/dlbt-nltn-nc" target="_blank">Xem cách tính.</a></p>');
        if (dlbt != 0) {
            getData("/posts/dlbt/" + dlbt);
        }

        let nc = calcNc(words);
        $("#result").append('<p class="calculation-steps"><b>Nhân cách bên ngoài (NC) = ' + nc + '</b>. <a href="/posts/cach-tinh/dlbt-nltn-nc" target="_blank">Xem cách tính.</a></p>');
        if (nc != 0) {
            getData("/posts/nc/" + nc);
        }

    }


    $("#calculate-btn").click(calculateBtnClick);


});