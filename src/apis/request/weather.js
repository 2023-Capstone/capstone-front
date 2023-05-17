const getWeatherData = async location => {
  try {
    const response = await fetch(
<<<<<<< HEAD
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
=======
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=e9b6d8a13a940275da5e435e8ab82816&units=metric`,
>>>>>>> 412195e5a32154739595e528896021f7b2e6b5d2
    );
    const { weather } = await response.json();

    return weather[0].main;
  } catch (e) {
    throw e;
  }
};

export { getWeatherData };
