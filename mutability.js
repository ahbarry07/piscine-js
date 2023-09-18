
const clone1 = {}
const clone2 = {}

for (let key in person){
    clone1[key]=person[key]
    clone2[key]=person[key]
}
Object.freeze(clone1)
Object.freeze(clone2)

const samePerson = person
// console.log(samePerson)

person.name = 'Rick'
person.age = 78
person['country'] = 'FR'
