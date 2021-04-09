//Getting Elements

const amountElement = document.querySelector('#amount')
const firstSelect = document.querySelector('#firstCurrency')
const secondSelect = document.querySelector('#secondCurrency')
const currency = new Currency('EUR', 'TRY', '<YOUR_ACCESS_KEY>')
//You can obtain access key by signing up to 'exchangeratesapi' and pass it here
const ui = new UI(firstSelect, secondSelect)

eventListeners()

function eventListeners() {

    amountElement.addEventListener('input', exchangeCurrency)

    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirst()
    }

    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()
    }
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value)

    currency.exhange()
        .then(result => {
            ui.displayResult(result)
        })
        .catch(err => console.log(err))
}