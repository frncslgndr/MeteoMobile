export class GeoRequest {
    static API_URL = "http://api.openweathermap.org/geo/1.0/direct";

    constructor(cityName, limit = 1) {
        this.q = cityName;
        this.limit = limit;
        this.appid = "f019d77502606dfd15460639c30da36a";
    }

    generateUrl() {
        const encodedCityName = encodeURIComponent(this.q);
        return `${GeoRequest.API_URL}?q=${encodedCityName},FR&limit=${this.limit}&appid=${this.appid}`;
    }

    async getCities(onSuccess) {
        const url = this.generateUrl();
        await fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(datas => {
                const filteredCities = datas.filter(city => city.lat && city.lon);
                onSuccess([...new Set(filteredCities)]);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            })
        ;
    }

    async getCity() {
        const cities = await this.getCities();
        return cities[0];
    }
}