class Storage{
    constructor(){
        this.city;
        this.defaultCity = 'Veracruz';
    }

    getLocationData(){
        this.city = localStorage.getItem('city') || this.defaultCity;
        return this.city;
    }

    setLocationData(city){
        localStorage.setItem('city',city);
    }
}