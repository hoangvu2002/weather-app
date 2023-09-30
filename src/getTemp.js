import getWeather from "./getWeather";

export default async function getTemp() {
    const data = await getWeather();
    const temp = await data.current.temp_c;
    const conditionDetails = await data.current.condition;
    const weatherIcon = await conditionDetails.icon;
    const tempText = document.querySelector(".temp");
    const weather = document.querySelector(".weather-icon");
    tempText.textContent = temp;
    weather.src = weatherIcon;
}