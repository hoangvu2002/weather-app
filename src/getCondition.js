import getWeather from "./getWeather";

export default async function getCondition() {
    const data = await getWeather();
    const conditionText = await data.current.condition.text;
    const conditionElement = document.querySelector(".condition");
    conditionElement.textContent = conditionText;
}