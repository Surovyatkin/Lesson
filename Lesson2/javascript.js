let money = +prompt("Ваш бюджет на месяц?", ""),
<<<<<<< HEAD
    time = prompt("Ввведите дату в формате ", '');
=======
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
>>>>>>> 374a0e26c990fb71411be02873cddc849b7f66c3

let appData = {
    budget: money,
    expenses: {},
<<<<<<< HEAD
    optionalExprnses: {},
=======
    optionalExpenses: {},
>>>>>>> 374a0e26c990fb71411be02873cddc849b7f66c3
    income: [],
    timeData: time,
    savings: false
};

<<<<<<< HEAD
for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
                console.log ("done");
                appData.expenses[a] = 0;
        } else {
            i--;
        }
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
=======
for (let i = 0; i < 2; i++){
    let a = +prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Восколько обойдется?", "");
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        
    }

};

//Цикл Do-While
/*let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Восколько обойдется?", "");
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }

    i++;
} while (i < 2);

//Цикл While
while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Восколько обойдется?", "");
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }

    i++;
};*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
>>>>>>> 374a0e26c990fb71411be02873cddc849b7f66c3
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
<<<<<<< HEAD
    console.log ("Произошла ошибка")
=======
    console.log("Произошла ошибка");
>>>>>>> 374a0e26c990fb71411be02873cddc849b7f66c3
}