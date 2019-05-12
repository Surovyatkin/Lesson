//ввод бюджета и даты
let MonthOnMoney = prompt("Ваш бюджет на месяц?", '');
let Data = prompt("Ввведите дату в формате YYYY-MM-DD", '');
console.log (MonthOnMoney);
console.log (Data);
//ввод расходов и стоимости
let MandatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", '');
let Cost = prompt("Во сколько обойдется?", '');
var Expenses = {
    MandatoryExpenses : MandatoryExpenses,
    Cost : Cost
};
//необязательные расходя, доп доходы
var OptionalExpenses = {};
var InCome = [];
console.log (MandatoryExpenses);
console.log (Cost);
console.log (Expenses);
//итоговый объект
var appData = {
    MonthOnMoney: MonthOnMoney,
    Data: Data,
    Expenses: Expenses,
    OptionalExpenses: OptionalExpenses,
    InCome: InCome,
    savings: false
};
console.log (appData);
//бюджет на 1 день
let MoneyOnDay = MonthOnMoney/30;
alert(MoneyOnDay);
