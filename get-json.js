
async function getJSON(path, params = {} ){
   
    let data
    let url = new URLSearchParams([...Object.entries(params)])
    url = `${path}?${url.toString()}`

    let result = await fetch(url).then((response)=> {
        if (response.ok){
            data = response.json().data
            return response.json()
        }else{
            return new Error(response.statusText)
        }

    })
   
    return data
}
