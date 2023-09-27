const regex1 = /[aoieuAOUIE]/ //recherche si une chaine contient une voyelle
const regex2 = /(?:[^aeiouAEIOU]*[aeiouAEIOU]){5,}/ // la chaine doit contenir au moins 5 voyelles
const regex3 = !/^aeiouAEIOU/ // la chaine ne doit pas commencer par une voyelle 

const filterShortStateName = (array) => array.filter((x) => x.length === 7 )

const filterStartVowel = (array) => array.filter((x) => x[0].match(regex1))

const filter5Vowels = (array) => array.filter((value) => value.match(regex2))

function filter1DistinctVowel(arr) {
    return arr.filter(word => {
      const lowercaseWord = word.toLowerCase()
      const vowels = [...lowercaseWord].filter(char => 'aeiou'.includes(char))
      return new Set(vowels).size === 1
    })
}

function multiFilter(arrayObj){
    return arrayObj.filter(temp =>{
        let capital = temp.capital.length < 8
        let name = temp.name.match(regex3)
        let tag = temp.tag.match(/(?:[^aeiouAEIOU]*[aeiouAEIOU]){1,}/) 
        let region = temp.region !== "South"
        return capital, name, tag, region
    })
}
