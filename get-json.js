
async function getJSON(path, params = {} ){
   
    let dataUrl
    let url = new URLSearchParams([...Object.entries(params)])
    url = `${path}?${url.toString()}`

    let result = await fetch(url).then((response)=> {
        dataUrl = response.json()
        if (!response.ok){
            return response.statusText
        }
    })
    if (!result) return response.statusText

    if (dataUrl.error) return dataUrl.error

    return result.data
}

// console.log(getJSON('/test', { query: 'hello world', b: 5 }))
// Dans cet exercice, nous allons nous concentrer sur la construction de flux asynchrones complexes avec des promesses.

// Créez une fonction nommée getJSON avec deux paramètres :

//     path : une URL appelée par votre fonction.
//     params : des paramètres de requête optionnels qui seront ajoutés au chemin.

// getJSON doit construire une url valide avec le chemin et les paramètres stringifiés, et utiliser fetch pour répondre à la requête.

// Si la réponse n'est pas OK, getJSON doit générer une erreur en utilisant le texte d'état de la réponse.

// Le corps de la réponse doit ensuite être lu et analysé à partir de JSON.

// L'objet analysé contient l'une de ces deux propriétés :

//     "data" : les données à renvoyer.
//     "error" : le message d'erreur à envoyer.

