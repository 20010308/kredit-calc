

function calc() {

    let creditSum = document.getElementById("kredit-sum").value;
    let yearPerson = document.getElementById("year-percent").value;
    let year = document.getElementById("year").value;
    let startPercent = document.getElementById("start-percent").value;
    let muddat = document.getElementById("muddat").value;
    let month = document.getElementById("month").value;

    let startPayment  = creditSum * startPercent/100;
    document.getElementById("start-payment").innerHTML = startPayment + " so'm";

    let givenSum = creditSum - startPayment;
    document.getElementById("given-sum").innerHTML = givenSum + " so'm";

    let monthPayment = givenSum /(muddat*12);
    document.getElementById("month-payment").innerHTML = monthPayment.toFixed(2) + " so'm";


    let persentSum = givenSum * yearPerson / 1200;
    let oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr",
        "Noyabr", "Dekabr"];
    let result = "";
    let resultmonth = 0;
    let persentpayment = 0;
    let jami = 0;

    for (let i =0; i < muddat*12;i++){

        if (month%12 === 0){
            month=0;
            year++;
        }

        result +=
            "<tr>" +
            "<td>"+(i + 1)+"</td>" +
            "<td>"+ year +"</td>" +
            "<td>"+ oylar[month] +"</td>" +
            "<td>"+ givenSum.toFixed(2) +"</td>" +
            "<td>"+ monthPayment.toFixed(2) +"</td>" +
            "<td>"+ persentSum.toFixed(2) +"</td>" +
            "<td>"+ (monthPayment + persentSum).toFixed(2) + "</td>" +
            "</tr>";
        givenSum -= monthPayment;
        persentSum = givenSum * yearPerson / 1200;
        month++;
        resultmonth += monthPayment.toFixed(2);
        persentpayment += persentSum.toFixed(2);
        jami = resultmonth + persentpayment + startPayment;
    }


    document.getElementById("result").innerHTML = result;
    document.getElementById("monpayment").innerHTML = resultmonth;
    document.getElementById("persentpayment").innerHTML = persentpayment.toFixed(2);
    document.getElementById("jami").innerHTML = jami.toFixed(2);

}
