// !значение из текстовых инпутов

const totalCost = document.getElementById('total-cost'),
  anInitialFee = document.getElementById('an-initial-fee'),
  creditTerm = document.getElementById('credit-term');
  
const all = document.querySelectorAll('input[type=number]');




// !значение из range инпутов

const totalCostRange = document.getElementById('total-cost-range'),
  anInitialFeeRange = document.getElementById('an-initial-fee-range'),
  creditTermRange = document.getElementById('credit-term-range');

// !значение Тоталов

const totalAmountOfCredit = document.getElementById('amount-of-credit'),
  totalMonthlyPayment = document.getElementById('monthly-payment'),
  totalRecommendedIncome = document.getElementById('recommended-income');

// !Все range :

const inputsRange = document.querySelectorAll('.input-range');

// !Все кнопки с процентной ставкой

const bankBtns = document.querySelectorAll('.bank');
const assignValue1 = () => {
    totalCostRange.value = totalCost.value;
    anInitialFeeRange.value = anInitialFee.value;
    creditTermRange.value = creditTerm.value;
    
}

const assignValue = () => {
  totalCost.value = totalCostRange.value;
  anInitialFee.value = anInitialFeeRange.value;
  creditTerm.value = creditTermRange.value;
};

assignValue();
assignValue1();

const banks = [
  {
    name: 'alfa',
    percents: 8.7,
  },
  {
    name: 'sberbank',
    percents: 8.4,
  },
  {
    name: 'pochta',
    percents: 7.9,
  },
  {
    name: 'tinkoff',
    percents: 9.2,
  },
];

let currentPercent = banks[0].percents;

for (const bank of bankBtns) {
  bank.addEventListener('click', () => {
    for (const item of bankBtns) {
      item.classList.remove('active');
    }
    bank.classList.add('active');
    takeActiveBank(bank);
  });
}

const takeActiveBank = (currentActive) => {
  const dataAttrValue = currentActive.dataset.name;
  const currentBank = banks.find((bank) => bank.name === dataAttrValue);
  currentPercent = currentBank.percents;
  calculation(totalCost.value, anInitialFee.value, creditTerm.value);
};
for (const index of all) {
    index.addEventListener('keyup', () => {
        
        assignValue1();
        calculation(totalCost.value, anInitialFee.value, creditTerm.value);
    })
}
for (const input of inputsRange) {
  input.addEventListener('input', () => {
    assignValue();
    calculation(totalCost.value, anInitialFee.value, creditTerm.value);
  });
}

const calculation = (totalCost = 0, anInitialFee = 10000, creditTerm = 1) => {
    // ! ЕП -Ежемесячный платеж
    // ! РК - размер кредит
    // ! ПС -процентная ставка
    // ! КМ - количество месяцев

    // ! ЕП = (РК + ((( РК / 100) * ПС) / 12 ) * КМ) / КМ

    let mounthlyPayment; // !ЕП
    let lounAmount = totalCost - anInitialFee; // ! РК
    let interestRate = currentPercent; // !ПС
    let numberOfYeras = creditTerm; // !кол-во лет
    let numberOfMonths = 12 * numberOfYeras; // !КМ

    mounthlyPayment = ( lounAmount + (((lounAmount / 100) * interestRate) / 12) * numberOfMonths) / numberOfMonths;
    const mounthlyPaymentArounded = Math.round(mounthlyPayment);
    if (mounthlyPaymentArounded < 0) {
        return false
    } else {
        totalAmountOfCredit.innerHTML = `${lounAmount} ₽`;
        totalMonthlyPayment.innerHTML = `${mounthlyPaymentArounded} ₽`;
        totalRecommendedIncome.innerHTML = `${mounthlyPaymentArounded + mounthlyPaymentArounded / 100 * 35} ₽`;

    }
}


