import getWeather from "./getWeather";

export default async function getPlaceDetails() {
    const data = await getWeather()
    const name = await data.location.name;
    const country = await data.location.country;
    const place = document.querySelector(".place");
    place.textContent = `${name}, ${country}`;
}