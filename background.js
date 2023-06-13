let weatherAPIKey = '022fb623da5846dea00172053230606';

chrome.browserAction.onClicked.addListener(function(tab) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=Paris`)
    .then(response => response.json())
    .then(data => {
        let weather = document.getElementById('weather');
        weather.innerText = `La météo à Paris est de ${data.current.temp_c} degrés Celsius.`;
    })
    .catch(err => console.log(err));
});
