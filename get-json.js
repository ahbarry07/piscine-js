
async function getJSON(path, params = {} ){
   
    let url = new URLSearchParams([...Object.entries(params)])
    url = `${path}?${url.toString()}`

    let result = await fetch(url).then((response)=> {
        if (!response.ok){
            throw Error(response.statusText)
        }
       return response.json()
    })

    if (result.error) throw Error(result.error)

    return result.data
}
