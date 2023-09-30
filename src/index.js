import getWeather from "./getWeather";
// eslint-disable-next-line import/no-cycle
import getPlaceDetails from "./getPlaceDetails";
import getTime from "./getTime";
import getTemp from "./getTemp";
import getGif from "./getGif";

export const API_KEY =   '3fe84c7614114cd4a5164613232209';
export const img = document.querySelector(".weather-icon");
export const gif = document.querySelector(".gif")

const button = document.querySelector("button");
button.addEventListener("click" , () => {
    getWeather();
    getPlaceDetails();
    getTime();
    getTemp();
    getGif();
});