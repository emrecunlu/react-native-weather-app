import { CityRaw, WeatherResponse } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getWeatherForecast: builder.query<WeatherResponse, CityRaw>({
      query: ({ latitude, longitude }) => ({
        url: "/forecast",
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
          appid: process.env.EXPO_PUBLIC_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetWeatherForecastQuery } = weatherApi;
