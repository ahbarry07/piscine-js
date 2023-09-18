//Calcul d'age

function dogYears(planet, age){

    let years = 0
    switch (planet){
        case 'earth':
            years = (age / 31557600) * 7
            return parseFloat(years.toFixed(2))
        case 'mercury':
            years = ((age * 0.2408467) / 31557600) * 7
                return parseFloat(years.toFixed(2))
        case 'venus':
            years = ((age * 0.61519726) / 31557600) * 7
                return parseFloat(years.toFixed(2))
        case 'mars':
            years = ((age * 1.8808158) / 31557600) * 7
                return parseFloat(years.toFixed(2))
        case 'jupiter':
            years = ((age * 11.862615) / 31557600) * 7
                return parseFloat(years.toFixed(2))
        case 'saturn':
            years = ((age * 29.447498) / 31557600) * 7
                return parseFloat(years.toFixed(2))
        case 'uranus':
            years = ((age * 84.016846) / 31557600) * 7
                return parseFloat(years.toFixed(2))
        case 'neptune':
            years = ((age * 164,79132) / 31557600) * 7
            return parseFloat(years.toFixed(2))
        default: return 0
    }
}


console.log(dogYears('earth', 1000000000))