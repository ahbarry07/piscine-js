//from Array to Set
const arrToSet = function(array){

    let mySet = new Set()
    for (let value of array){
        mySet.add(value)
    }
    return mySet
}

//from Array to string
const arrToStr = (array) => array.join('')

// from Set to Array
const setToArr = function(set){

    let arr = []
    for (let val of set){
        arr.push(val)
    }
    return arr
}

//from Set to string
const setToStr = (set) => (arrToStr(setToArr(set)))

//from string to Array
const strToArr = (str) => str.split('')

//from string to Set
const strToSet = (str) => (arrToSet(strToArr(str)))

//from Map to Object
const mapToObj = function(mapValues){
    let obj = {}
    for (const [key, value] of mapValues){
        obj[key] = value
    }
    return obj
}

//from Object to Array
var objToArr = function(obj){
    let array = []
    for(let value of obj){
        array.push(value)
    }
    return array
}

//from Object to Map
const objToMap = function(obj){
    let map = new Map()
    for(let key in obj){
        map[key] = obj[key]
    }
    return map
} 

//from Array to Object
var arrToObj = function(arr){
    let obj = {}
    for(let i in arr){
        obj[i] = arr[i]
    }
    return obj
}

//from String to Objet
const strToObj = (str) => (arrToObj(strToArr(str)))

//superTypeOf
const superTypeOf = function(value){

    if (value === null) {
        return 'null';
    }
    
    if (typeof value === 'object') {
        if (value instanceof Map) {
            return 'Map';
        }
        if (value instanceof Set) {
            return 'Set';
        }
        if (Array.isArray(value)) {
            return 'Array';
        }
        if (typeof value.constructor === 'function' && value.constructor.name === 'Object') {
            return 'Object';
        }
    }
    
    if (typeof value === 'string') {
        return 'String';
    }
    
    if (typeof value === 'number') {
        if (isNaN(value)) {
        return 'Number';
        }
        return 'Number';
    }
    
    if (typeof value === 'undefined') {
        return 'undefined';
    }
    
    if (typeof value === 'function') {
        return 'Function';
    }
    
    return typeof value;
    

}
