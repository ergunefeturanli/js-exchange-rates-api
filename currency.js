class Currency {

    constructor(firstCurrency, secondCurrency,accessKey) {
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
        this.url = ''
        this.url =`http://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}&format=1?base=`
        //You can obtain access key by signing up to 'exchangeratesapi' 
        this.amount = null
    }

    exhange() {

        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const parity = data.rates[this.secondCurrency] / data.rates[this.firstCurrency]
                    const amount2 = Number(this.amount)
                    let total = amount2 * parity

                    resolve(total)
                })
                .catch(err => reject(err))
        })

    }

    changeAmount(amount) {
        this.amount = amount
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency
    }

}