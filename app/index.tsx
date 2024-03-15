import { Dimensions, Image, View, ActivityIndicator } from "react-native";
import { useCity } from "@/store/features/city";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchCity from "@/components/weather/SearchCity";
import { useGetWeatherForecastQuery } from "@/store/services/weatherApi";
import CurrentWeather from "@/components/weather/CurrentWeather";
import DailyForecastList from "@/components/weather/DailyForecastList";
import { get5DaysUnique } from "@/utils/helpers";

const { width, height } = Dimensions.get("screen");

const MainPage = () => {
  const { city } = useCity();

  const { isFetching, data } = useGetWeatherForecastQuery(city);

  return (
    <SafeAreaView className="flex-1 relative">
      <Image
        className="absolute"
        source={require("../assets/images/abstract.jpeg")}
        style={{
          width,
          height,
        }}
        blurRadius={80}
        resizeMode="cover"
      />

      {(isFetching && (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color="#fff" />
        </View>
      )) || (
        <>
          {data && (
            <View className="flex-1 justify-around px-6 py-4">
              <SearchCity />

              <CurrentWeather
                city={city.name}
                date={data.list[0].dt_txt}
                icon={data.list[0].weather[0].icon}
                humidity={data.list[0].main.humidity}
                description={data.list[0].weather[0].description}
                temp={data.list[0].main.temp}
                wind={data.list[0].wind.speed}
              />

              <DailyForecastList items={get5DaysUnique(data)} />
            </View>
          )}
        </>
      )}

      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};

export default MainPage;
