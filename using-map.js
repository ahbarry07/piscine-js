const regex = /\s/g

const citiesOnly = (array) => array.map((x) => x.city)

const  upperCasingStates = (array) => array.map((x) => capitalizeWords(x))

const fahrenheitToCelsius = (array) => array.map((x) => Math.floor((parseFloat(x.slice(0,3))-32) * (5/9)).toString()+'°C');

const trimTemp = (array) => array.map(temp =>{
    temp.temperature =  temp.temperature.replace(regex, '')
    return temp
})

const tempForecasts = (arrayObj) => arrayObj.map(temp =>
    fahrenheitToCelsius(temp.temperature.replace(regex, '').split(' ')).join('elsius') + ' in ' + temp.city +', ' + temp.state
) 


function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word; 
    }
  });
  const capitalizedStr = capitalizedWords.join(' ');
  return capitalizedStr;
}


