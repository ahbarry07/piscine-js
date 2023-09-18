const escapeStr = `\`\\/"'`
Object.freeze(escapeStr)//Cette propriete permet de figer un objet c'est a dire de le rendre a ce qu'il ne puisse pas etre modifier

const arr = [4, '2']
Object.freeze(arr)

const obj = {
    str: "",
    num: 0,
    bool: false,
    undef: undefined,
}
Object.freeze(obj)

const nested = {
    arr: [4, undefined, '2'],
    obj:{
        str:"",
        num:0,
        bool:false,
    }
}
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)