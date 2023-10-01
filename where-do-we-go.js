import { places } from "./where-do-we-go.data.js";

export function explore() {
    const body = document.body;

    // places.sort((a, b) => parseFloat(a.coordinates) - parseFloat(b.coordinates));
    places.sort(compareCoordinates)
    // let count = 1
    // console.log(places.length)
    places.forEach((place) => {
        //  console.log(count)
        const section = createSection(place);
        body.appendChild(section);
        // count++
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

function compareCoordinates(a, b) {
    const aDirection = a.coordinates.split(" ")[0].split('"')[1];
    const bDirection = b.coordinates.split(" ")[0].split('"')[1];
    const aLat = a.coordinates.split(" ")[0];
    const bLat = b.coordinates.split(" ")[0];
    let aLatDeg = parseInt(aLat.split("°")[0]);
    let aLatMin = parseInt(aLat.split("°")[1].split("'")[0]);
    let aLatSec = parseInt(aLat.split("°")[1].split("'")[1].split('"')[0]);
    let bLatDeg = parseInt(bLat.split("°")[0]);
    let bLatMin = parseInt(bLat.split("°")[1].split("'")[0]);
    let bLatSec = parseInt(bLat.split("°")[1].split("'")[1].split('"')[0]);
    if (aDirection === "S") {
        aLatDeg = -aLatDeg;
        aLatMin = -aLatMin;
        aLatSec = -aLatSec;
    }
    if (bDirection === "S") {
        bLatDeg = -bLatDeg;
        bLatMin = -bLatMin;
        bLatSec = -bLatSec;
    }
    if (aLatDeg > bLatDeg) {
        return -1;
    }
    if (aLatDeg < bLatDeg) {
        return 1;
    }
    if (aLatDeg === bLatDeg) {
        if (aLatMin > bLatMin) {
            return -1;
        }
        if (aLatMin < bLatMin) {
            return 1;
        }
        if (aLatMin === bLatMin) {
            if (aLatSec > bLatSec) {
                return 1;
            }
            if (aLatSec < bLatSec) {
                return -1;
            }
            if (aLatSec === bLatSec) {
                return 0;
            }
        }
    }
}
