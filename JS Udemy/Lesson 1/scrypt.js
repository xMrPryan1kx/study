const budget = prompt('введите Ваш бюджет на месяц').replace(/\s+/g, ''),
      data = prompt('Введите дату в формате YYYY-MM-DD'),
      budgetForTheDay = budget / 30;

let appData = {
    budget,
    timeData: data,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (i = 0; i < 2; i++) {
    let firstAnswer = prompt('Введите обязательную статью расходов в этом месяце');
    let secondAnswer = +prompt('Во сколько обойдется?');
    if (!secondAnswer) {
        alert('Введено не числовое значение');
        continue;
    }
    appData.expenses[firstAnswer] = secondAnswer;
}

alert(`Ваш бюджет на 1 день без учетов расходов равен : ${budgetForTheDay} рублей`)





