
function stock(number) {

    let res = Math.abs(number)
    let count1 = 0
    let count2 = 0
    let entier = 0
    let dec = 0
    let array = []

    while (res >= 10) {
        res = res - 10
        count1++
    }
    res = res * 10
    while (res >= 10) {
        res = res - 10
        count2++
    }
    if (number < 0) {
        entier = 0 - ((count1 * 10) + count2)
        dec = Math.abs(number) - Math.abs(entier)
        array.push(entier, dec)
        return array
    }
    entier = (count1 * 10) + count2
    dec = number - entier
    array.push(entier, dec)

    return array
}

function round(number) {

    let entier = stock(number)[0]
    let dec = stock(number)[1]
    let count = 0
    dec = dec * 1000
    while (dec >= 10) {
        dec = dec - 10
        count++
    }
    return count >= 59 && entier > 0 ? entier + 1 : count >= 59 && entier < 0 ? entier - 1 : entier
}

const ceil = (number) => stock(number)[0] > 0 && stock(number)[1] * 10 !== 0 ? stock(number)[0] + 1 : stock(number)[0]

const floor = (number) => stock(number)[0] < 0 && stock(number)[1] * 10 !== 0 ? stock(number)[0] - 1 : stock(number)[0]

const trunc = (number) => stock(number)[0]

