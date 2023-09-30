import getWeather from "./getWeather";

export default async function getTime() {
    const data = await getWeather();
    const time = await data.location.localtime;
    const timeText = document.querySelector(".time");
    timeText.textContent = time;
}