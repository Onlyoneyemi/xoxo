const account = {
    name: "Bello  Opeyemi",
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.incomes.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        const balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

account.addExpense("Rent", 950)
account.addExpense("Coffee", 2)
account.addIncome("Job",1000)
console.log(account.getAccountSummary())