const API_KEY = `3521ed3fb625b0bddc8c67be4fec0b85`

const country = document.querySelector('#country')
const area = document.querySelector('#area')
const currentTemp = document.querySelector('#currentTemp')
const maxTemp  = document.querySelector('#maxTemp')
const minTemp   = document.querySelector('#minTemp')
const citybtn = document.querySelectorAll('.citybtn');
citybtn.forEach(ele=>ele.addEventListener('click',(e)=>getCityWeater(e)))

const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getCurrentWeater(lat,lon)
    })
}

const getCurrentWeater = async (lat,lon) => {
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    let response = await fetch(url);
    let data = await response.json();
    console.log('data',data )
    country.innerText = data.sys.country;
    area.innerText = data.name;
    currentTemp.innerText = data.main.temp
    maxTemp.innerText = data.main.temp_max;
    minTemp.innerText = data.main.temp_min;
}

const getCityWeater = async (e) => {
    let city = e.target.dataset.cityname;
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&`);
    let response = await fetch(url);
    let data = await response.json();
    console.log('data',data )
    country.innerText = data.sys.country;
    area.innerText = data.name;
    currentTemp.innerText = data.main.temp
    maxTemp.innerText = data.main.temp_max;
    minTemp.innerText = data.main.temp_min;
}




getCurrentLocation();