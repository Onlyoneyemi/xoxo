const getTipper = (tipPercent) => {

    return (amount) => {
        return tipPercent * amount
    }
}

const getTip15 = getTipper(.15)
console.log(getTip15(100))
const getTip20 = getTipper(.2)
console.log(getTip20(100))