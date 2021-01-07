const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation);
const ui = new UI();
// weather.changeLocation('Toronto');
document.addEventListener('DOMContentLoaded',getWeather);

document.querySelector('#w-change-btn').addEventListener('click', changeLocation);

function changeLocation(){
    const city = document.querySelector('#city').value;
    // Change location 
    weather.changeLocation(city);
    // set location in local storage
    storage.setLocationData(city);
    // display and get the weather
    getWeather();
    // close modal
    document.querySelector("#city").value = '';
    $('#locModal').modal('hide');
    // e.preventDefault();

}

function getWeather(){
    weather.getWeather()
    .then(data => {
        ui.paint(data);
        console.log(data)
    })
    .catch(err => console.log(err))
}