function solveTask1() {
    let num = document.getElementById("task1").value;
    if (num.length == 0) {
        document.getElementById("task1Answer").innerHTML = `Wprowadź liczbę do sprawdzenia.`;
        return;
    }
    num = parseFloat(num);
    if (Number.isInteger(num)) {
        (num % 2 == 0) ? document.getElementById("task1Answer").innerHTML = `Liczba ${num} jest parzysta.` : document.getElementById("task1Answer").innerHTML = `Liczba ${num} jest nieparzysta.`;
    }
    else {
        document.getElementById("task1Answer").innerHTML = `Liczba ${num} nie jest liczbą całkowitą.`
    }
}

function solveTask2() {
    let num = document.getElementById("task2").value;
    if (num.length == 0) {
        document.getElementById("task2Answer").innerHTML = `Wprowadź liczbę do sprawdzenia.`;
        return;
    }
    num = parseFloat(num);
    if (num < 2 && num >= -35) {
        document.getElementById("task2Answer").innerHTML = `Liczba ${num} należy do przedziału &lt;-35;2)`
    }
    else if (num > 11 && num <= 27) {
        document.getElementById("task2Answer").innerHTML = `Liczba ${num} należy do przedziału (11;27&gt;`
    } else {
        document.getElementById("task2Answer").innerHTML = `Liczba ${num} nie należy do żadnego z podanych przedziałów.`    
    }
}

function solveTask3() {
    let num = parseInt(document.getElementById("task3").value);
    switch (num) {
        case 0:
            document.getElementById("task3Answer").innerHTML = "Egzamin do poprawy.";
            break;
        case 1:
            document.getElementById("task3Answer").innerHTML = "Zdałeś egzamin.";
            break;
        case 2:
            document.getElementById("task3Answer").innerHTML = "Zaliczona tylko teoria.";
            break;
        case 3:
            document.getElementById("task3Answer").innerHTML = "Zaliczona tylko praktyka.";
            break;
        default:
            document.getElementById("task3Answer").innerHTML = "Wybierz liczbę."; 
    }
}

document.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        solveTask1();
        solveTask2();
        solveTask3();
      }
});
