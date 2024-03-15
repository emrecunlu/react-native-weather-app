import { WeatherResponse } from "./types";
import { format } from "date-fns";

export const get5DaysUnique = (weather: WeatherResponse) => {
  let prevDate = "";

  return weather.list.filter((x) => {
    if (format(x.dt_txt, "yyyy-mm-dd") !== prevDate) {
      prevDate = format(x.dt_txt, "yyyy-mm-dd");
      return true;
    }

    return false;
  });
};

export const getWeatherImage = (description: string) => {
  let image = "";

  switch (description) {
    case "clear sky":
      image = "clear.png";
      break;
    case "few clouds":
      image = "partlycloudy.png";
      break;
    case "scattered clouds":
      image = "cloudy.png";
      break;
    case "broken clouds":
      image = "cloudy.png";
      break;
    case "shower rain":
      image = "chancerain.png";
      break;
    case "rain":
      image = "rain.png";
      break;
    case "thunderstorm":
      image = "tstorms.png";
      break;
    case "snow":
      image = "snow.png";
      break;
    case "mist":
      image = "fog.png";
      break;
  }

  return image;
};
