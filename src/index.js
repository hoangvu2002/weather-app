const API_KEY =   '3fe84c7614114cd4a5164613232209';

export default async function getWeather() {
    try {        
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Hanoi&aqi=no`);

        if (!response.ok) {
        
            throw new Error('Network response was not ok');
        
        };
        const data = await response.json();
        const current = await data.current.temp_c;
        console.log(current);
    } catch (error) {
        console.error("Error", error.message);
    }
}

const button = document.querySelector("button");
button.addEventListener("click" , getWeather);