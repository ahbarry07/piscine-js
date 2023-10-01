import { places } from './where-do-we-go.data.js';
export function explore() {
    for (let i = 0; i < places.length; i++) {

        let section = document.createElement("section")
        const url = "https://public.01-edu.org/subjects/where-do-we-go/where-do-we-go_images/arlit.jpg"
        section.style.backgroundImage = `url(${url})`
        section.style.backgroundSize = "100%"
        section.className = "location"
        let link = document.createElement('a')
        link.innerHTML = places[i].name + places[i].coordinates
        link.style.color = places[i].color
        section.appendChild(link)
        document.body.appendChild(section)
    }
    console.log(places[2].name.split(',')[0].toLowerCase().split(' ').join('-'))
}