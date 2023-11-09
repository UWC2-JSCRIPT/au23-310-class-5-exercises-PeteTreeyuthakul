// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

document.getElementById('weather-head').innerText = 'February 10 Weather Forecast,Seattle'

// Change the styling of every element with class "sun" to set the color to "orange"

const sunClassEl = document.querySelectorAll('.sun')
for (let i = 0; i<sunClassEl.length; i++){
    sunClassEl[i].style.color = 'orange'
}

// Change the class of the second <li> from to "sun" to "cloudy"

sunClassEl[1].className = 'cloudy'