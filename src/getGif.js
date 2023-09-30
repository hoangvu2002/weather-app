import getWeather from "./getWeather";


export default async function getGif() {
    try {
        const data = await getWeather();
        const condition = await data.current.condition.text;
        const giphy = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9HKw868HXaQceIlEmtmLZjVlldUM8uIg&s=${condition}`, {
            mode: 'cors'
        });
        const weatherData = await giphy.json();
        const gifUrl = await weatherData.data.images.original.url;
        const gif = document.querySelector(".gif");
        gif.src = gifUrl;
    } catch (error) {
        console.error('Error:', error.message);
    }
}