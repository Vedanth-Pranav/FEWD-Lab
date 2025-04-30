import React, { useState } from 'react';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '3f3f8bdd2cde4cf485e51730253004';

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`
      );
      const data = await res.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError('');
      }
    } catch (err) {
      setError('Failed to fetch weather data.');
      setWeather(null);
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '0.5rem', width: '70%' }}
      />
      <button onClick={fetchWeather} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Get Weather
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{weather.location.name}, {weather.location.country}</h3>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
