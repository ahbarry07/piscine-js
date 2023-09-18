
function first(str_or_arr){
   return str_or_arr[0]
}

function last(str_or_arr){
    return str_or_arr[str_or_arr.length-1]
}

function kiss(str_or_arr){
    let array = []
    array.push(str_or_arr[str_or_arr.length-1], str_or_arr[0])

    return array
}

