
function hasCity(country, arrayOfCities){
    return func(city) = function(){
        for (let i in arrayOfCities){
            if (city === arrayOfCities[i]){
                return `${city} is a city from ${country}`
            }
        }
        return `${city} is not a city from ${country}`
    }
}