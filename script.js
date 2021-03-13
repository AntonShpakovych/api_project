today = new Date();

time = document.querySelector('.time')
time.textContent = today.getHours() + ':' + today.getMinutes()

class Time {
    constructor(today) {
        this.hours = today.getHours(),
            this.minets = today.getMinutes()
    }
    show() {
        time.textContent = this.hours + ':' + this.minets
    }
}

function load_time() {

    setInterval(() => {
        let time = new Time(new Date())
        time.show()
    }, 1000);
}


let global_class_main = document.querySelector('.global_class_main')
let menu = document.querySelector('.menu')
menu.style.height = '50px'
menu.style.backgroundColor = 'yellow'
document.querySelector('.menu ul').style.display = 'flex'


global_class_main.style.backgroundColor = 'black'
global_class_main.style.paddingTop = '50px'
// global_class_main.style.height = '100vh'

let main_info = document.querySelector('.main_info')
main_info.style.backgroundColor = 'yellow'

let btn = document.querySelectorAll('.nav li a')
let $userCity = document.getElementById('userCity')

$userCity.addEventListener('change', function () {
    load_weather(this.value)
    load_forecast(this.value)
})

let url_sport = 'http://newsapi.org/v2/top-headlines?country=ua&category=sport&apiKey=03b9a074b118432ba92b615d168a1e76'
let url_tech = 'http://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=03b9a074b118432ba92b615d168a1e76'
let url_business = 'http://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=03b9a074b118432ba92b615d168a1e76'


async function loadNews(obj) {
    let text = await fetch(obj)
    let news = await text.json()
    let articles = news.articles
    let container = document.createElement('DIV')
    for (let i = 0; i < articles.length; i++) {
        let article = document.createElement('ARTICLE')
        article.innerHTML = `<h3>${articles[i].title}</h3>
        <img style = "width:50%" src="${articles[i].urlToImage}" alt = ""/>
        <p>${articles[i].description}</p>
        <a class = 'btn_read_more' href = "${articles[i].url}">Read more </a>`
        container.appendChild(article)
    }
    if (obj == url_sport) {
        document.querySelector('.sport_info').appendChild(container)
    }
    if (obj == url_business) {
        document.querySelector('.business_info').appendChild(container)
    }
    if (obj == url_tech) {
        document.querySelector('.tech_info').appendChild(container)
    }
    let btn_read_more = document.querySelectorAll('.btn_read_more')
    console.log(btn_read_more)
}
loadNews(url_sport)
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {

        if (i == 0) {
            main_info.style.backgroundColor = 'yellow'
            document.querySelector('.tech_info').classList.add('hide')
            document.querySelector('.business_info').classList.add('hide')
            document.querySelector('.weather_info').classList.add('hide')
            document.querySelector('.sport_info').classList.remove('hide')

            loadNews(url_sport)
            global_class_main.style.height = '100%'
        }
        if (i == 1) {
            document.querySelector('.sport_info').classList.add('hide')
            document.querySelector('.tech_info').classList.add('hide')
            document.querySelector('.business_info').classList.add('hide')
            document.querySelector('.weather_info').classList.remove('hide')

            main_info.style.backgroundColor = 'black'
            weather_info.style.backgroundColor = 'black'
            global_class_main.style.height = '100vh'
            main_info.style.height = '100%'

        }
        if (i == 2) {
            main_info.style.backgroundColor = 'yellow'
            document.querySelector('.tech_info').classList.add('hide')
            document.querySelector('.weather_info').classList.add('hide')
            document.querySelector('.sport_info').classList.add('hide')
            document.querySelector('.business_info').classList.remove('hide')
            loadNews(url_business)
            global_class_main.style.height = '100%'

        }
        if (i == 3) {
            main_info.style.backgroundColor = 'yellow'
            document.querySelector('.weather_info').classList.add('hide')
            document.querySelector('.sport_info').classList.add('hide')
            document.querySelector('.business_info').classList.add('hide')
            document.querySelector('.tech_info').classList.remove('hide')

            loadNews(url_tech)
            global_class_main.style.height = '100%'
        }
    })
}


let weather_info = document.querySelector('.weather_info')
let api_block_weather = document.createElement('DIV')
api_block_weather.classList.add('api_weather')
api_block_weather.style.width = '700px'
api_block_weather.style.height = '500px'
api_block_weather.style.backgroundColor = 'yellow'
api_block_weather.append(document.querySelector('.block_with_input'))

let block_with_current_temp = document.createElement('DIV')
block_with_current_temp.classList.add('block_current_temp')
let block_with_img = document.createElement('DIV')
block_with_img.classList.add('block_with_img_weather')
let img_weather = document.createElement('IMG')
img_weather.classList.add('weather_img')
block_with_img.insertAdjacentElement('beforeend', img_weather)
block_with_current_temp.insertAdjacentElement('beforeend', block_with_img)

let block_with_C = document.createElement('DIV')
block_with_C.classList.add('block_with_C')

block_with_current_temp.insertAdjacentElement('beforeend', block_with_C)

let block_with_full_info = document.createElement('DIV')
block_with_full_info.classList.add('block_with_full_info')
let cloud = document.createElement('P')
let vision = document.createElement('P')
let humidity = document.createElement('P')
let pressure = document.createElement('P')
block_with_full_info.insertAdjacentElement('beforeend', cloud)
block_with_full_info.insertAdjacentElement('beforeend', vision)
block_with_full_info.insertAdjacentElement('beforeend', humidity)
block_with_full_info.insertAdjacentElement('beforeend', pressure)
block_with_current_temp.insertAdjacentElement('beforeend', block_with_full_info)
api_block_weather.append(block_with_current_temp)


let block_with_forecast = document.createElement('DIV')
block_with_forecast.classList.add('block_with_forecast')





let block_with_day_1 = document.createElement('DIV')
block_with_day_1.classList.add('block_1')

let p_day_1 = document.createElement('P')
p_day_1.classList.add('p_day_1_data')
block_with_day_1.append(p_day_1)

let img_day_1 = document.createElement('IMG')
img_day_1.classList.add('img_day_1_weather')
block_with_day_1.append(img_day_1)

let p_day_1_temp = document.createElement('P')
p_day_1_temp.classList.add('p_day_1_temp')
block_with_day_1.append(p_day_1_temp)

block_with_forecast.append(block_with_day_1)






let block_with_day_2 = document.createElement('DIV')
block_with_day_2.classList.add('block_2')

let p_day_2 = document.createElement('P')
p_day_2.classList.add('p_day_2_data')
block_with_day_2.append(p_day_2)

let img_day_2 = document.createElement('IMG')
img_day_2.classList.add('img_day_2_weather')
block_with_day_2.append(img_day_2)

let p_day_2_temp = document.createElement('P')
p_day_2_temp.classList.add('p_day_2_temp')
block_with_day_2.append(p_day_2_temp)


block_with_forecast.append(block_with_day_2)








let block_with_day_3 = document.createElement('DIV')
block_with_day_3.classList.add('block_3')

let p_day_3 = document.createElement('P')
p_day_3.classList.add('p_day_3_data')
block_with_day_3.append(p_day_3)


let img_day_3 = document.createElement('IMG')
img_day_3.classList.add('img_day_3_weather')
block_with_day_3.append(img_day_3)

let p_day_3_temp = document.createElement('P')
p_day_3_temp.classList.add('p_day_3_temp')
block_with_day_3.append(p_day_3_temp)


block_with_forecast.append(block_with_day_3)




let block_with_day_4 = document.createElement('DIV')
block_with_day_4.classList.add('block_4')


let p_day_4 = document.createElement('P')
p_day_4.classList.add('p_day_4_data')
block_with_day_4.append(p_day_4)


let img_day_4 = document.createElement('IMG')
img_day_4.classList.add('img_day_4_weather')
block_with_day_4.append(img_day_4)


let p_day_4_temp = document.createElement('P')
p_day_4_temp.classList.add('p_day_4_temp')
block_with_day_4.append(p_day_4_temp)


block_with_forecast.append(block_with_day_4)




api_block_weather.append(block_with_forecast)
weather_info.append(api_block_weather)



async function load_weather(city_name = 'Rivne') {
    document.querySelector('.city_input').value = `${city_name}`
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=e8fd08d3e69243e8bd3117ba93d64f3c`



    try {
        let a = '°C'
        console.log(city_name)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        block_with_C.innerHTML = Math.round(data.main.temp - 273) + `<span>${a}</span>`
        cloud.textContent = 'Хмарність: ' + data.clouds.all
        vision.textContent = 'Видимість: ' + data.visibility
        humidity.textContent = 'Вологість: ' + data.main.humidity
        pressure.textContent = 'Атмосферний тиск: ' + data.main.pressure
        img_weather.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    } catch (err) {
        console.log(err)
    }
}

async function load_forecast(city_name = 'Rivne') {
    document.querySelector('.city_input').value = `${city_name}`
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=e8fd08d3e69243e8bd3117ba93d64f3c`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        p_day_1.textContent = 'Прогноз на: ' + data.list[6].dt_txt
        img_day_1.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`)
        p_day_1_temp.textContent = 'Температура: ' + Math.round(data.list[6].main.temp - 273) + '°C'


        p_day_2.textContent = 'Прогноз на: ' + data.list[14].dt_txt
        img_day_2.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`)
        p_day_2_temp.textContent = 'Температура: ' + Math.round(data.list[14].main.temp - 273) + '°C'


        p_day_3.textContent = 'Прогноз на: ' + data.list[22].dt_txt
        img_day_3.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png`)
        p_day_3_temp.textContent = 'Температура: ' + Math.round(data.list[22].main.temp - 273) + '°C'


        p_day_4.textContent = 'Прогноз на: ' + data.list[30].dt_txt
        img_day_4.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png`)
        p_day_4_temp.textContent = 'Температура: ' + Math.round(data.list[30].main.temp - 273) + '°C'


    } catch (err) {
        console.log(err)
    }
}
load_forecast()
load_weather()
load_time()