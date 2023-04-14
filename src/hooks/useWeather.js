import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { getWeatherData } from '@/apis/request/weather';
import { CLIENT_MESSAGE } from '@/constants/message';

const useWeather = () => {
  const [weather, setWeather] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successGetLocation,
      failGetLocation,
    );
  }, []);

  const successGetLocation = async position => {
    try {
      const data = await getWeatherData({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setWeather(data);
    } catch (e) {
      alert(CLIENT_MESSAGE.ERROR.FAIL_GET_WEATHER);
      navigate('/');
    }
  };
  const failGetLocation = () => {
    alert(CLIENT_MESSAGE.ERROR.FAIL_GET_LOCATION);
    navigate('/');
  };

  return { weather };
};

export default useWeather;
