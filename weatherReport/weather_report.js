function showweatherDetails(event) {
    event.preventDefault();

    const latitude = document.getElementById('lat').value;
    const longitude = document.getElementById('long').value;

    const apiKey = '4897eee7ab415ee0fbfc7705bf606c32';
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Max Temperature: ${data.main.temp_max} &#8451;</p>
      <p>Min Temperature: ${data.main.temp_min} &#8451;</p>
      <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  })
      .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
  }
    
  
  
  document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);
 



