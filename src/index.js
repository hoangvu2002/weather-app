import getWeather from "./getWeather";

export const API_KEY =   '3fe84c7614114cd4a5164613232209';
export const img = document.querySelector("img");
export const gif = document.querySelector("")

const button = document.querySelector("button");
button.addEventListener("click" , getWeather);