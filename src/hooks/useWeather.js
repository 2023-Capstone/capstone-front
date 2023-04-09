import { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { getWeatherData } from '@/apis/request/weather';

const useWeather = () => {
  const weather = useRef('');

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successGetLocation,
      failedGetLocation,
    );
  }, []);

  const successGetLocation = async position => {
    const data = await getWeatherData({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
    weather.current = data;
  };
  const failedGetLocation = () => {
    alert('위치 정보를 가져올 수 없습니다.');
    navigate(-1);
  };
  const getWeather = () => {
    return weather.current;
  };
  return { getWeather };
};

export { useWeather };
