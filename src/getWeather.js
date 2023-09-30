/* eslint-disable import/no-cycle */
import { API_KEY } from "./index";


// eslint-disable-next-line consistent-return
export default async function getWeather() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Hanoi&aqi=no`);

        if (!response.ok) {

            throw new Error('Network response was not ok');

        };
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error", error.message);
    }
}
