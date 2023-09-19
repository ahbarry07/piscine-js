const is = {}

is.num = function (num){
    return (typeof num) === "number"
}

is.nan = function (nan){
    return Number.isNaN(nan)
}

is.str = function (str){
    return (typeof str) === "string"
}

is.bool = function (bool){
    return (typeof bool) === "boolean"
}

is.undef = function (und){
    return und === undefined
}

is.def = function (deff){
    return deff !== undefined
}

is.arr = function (array){
    return Array.isArray(array) 
}

is.obj = function (objet){
    if (Array.isArray(objet) || objet === null){
        return false
    }
    return (typeof objet) === "object"  
}

is.fun = function (func){
    return (typeof func) === "function"
}

is.truthy = function (truth){
    return (typeof truth) === "truthy"
}

is.falsy = function (fals){
    return (typeof fals) === "falsy"
}
