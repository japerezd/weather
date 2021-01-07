class UI{
    constructor(){
        this.location = document.querySelector('#w-location');
        this.description = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.dewpoint = document.querySelector('#w-dewpoint');
        this.wind = document.querySelector('#w-wind');
    }

    paint(weather){
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.description.textContent = weather.weather[0].description.toUpperCase();
        this.string.textContent = weather.main.temp + ' °C';
        // this.details.textContent = weather.
        const url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        this.icon.setAttribute('src',url);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} °C`;
        // this.dewpoint.textContent = weather.
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`
    }
}