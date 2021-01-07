class Weather{
    constructor(city){
        this.apiKey = 'a78cc7f11e15f7583bff18b64cdd3fa9';
        this.city = city;
        // this.state = state;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
        // const data = await response.json();
        return response.json();
    }
 
    changeLocation(city){
        this.city = city;
    }
}