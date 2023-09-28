let myAccount = {
    name: "Bello Opeyemi",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses

    return `Account of ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.`
}

addIncome(myAccount, 2500)
addExpense(myAccount, 900)
addExpense(myAccount, 2.50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))