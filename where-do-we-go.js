import { places } from "./where-do-we-go.data.js";

export function explore() {
    const body = document.body;

    places.sort((a, b) => parseFloat(a.coordinates) - parseFloat(b.coordinates));

    places.forEach((place) => {
        // console.log(place)
        const section = createSection(place);
        body.appendChild(section);
    });

    const locationIndicator = createIndicator("location");
    body.appendChild(locationIndicator);

    const compass = createIndicator("direction");
    body.appendChild(compass);

    let prevSectionIndex = -1;

    window.addEventListener("scroll", () => {
        const sectionIndex = Math.floor((window.scrollY + window.innerHeight / 2) / window.innerHeight);

        if (sectionIndex !== prevSectionIndex) {
            updateIndicator(locationIndicator, places[sectionIndex]);
            prevSectionIndex = sectionIndex;
        }

        compass.textContent = window.scrollY > 0 ? "S" : "N";
    });
}

function createSection(place) {
    const section = document.createElement("section");
    section.style.backgroundImage = `url('./where-do-we-go_images/${
        place.name.toLowerCase().replaceAll(/ /g, "-").split(",")[0]
    }.jpg')`
    return section;
}

function createIndicator(className) {
    const indicator = document.createElement("div");
    indicator.classList.add(className);
    return indicator;
}

function updateIndicator(indicator, place) {
    if (place){
        indicator.textContent = `${place.name}\n${place.coordinates}`;
        indicator.href = `https://www.google.com/maps/place/${encodeURIComponent(place.coordinates)}/`;
        indicator.style.color = place.color;
        indicator.target = "_blank";
    }
}

document.addEventListener("DOMContentLoaded", explore);
