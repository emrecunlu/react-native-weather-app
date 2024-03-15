import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { format } from "date-fns";
import icons from "@/utils/icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  city: string;
  temp: number;
  icon: string;
  description: string;
  humidity: number;
  date: string;
  wind: number;
};

const CurrentWeather = ({
  city,
  date,
  icon,
  humidity,
  temp,
  description,
  wind,
}: Props) => {
  return (
    <View className="flex-1 justify-around items-center">
      <Text className="text-4xl text-white font-bold">
        {city},
        <Text className="text-xl font-semibold text-zinc-300">Türkiye</Text>
      </Text>

      <Image source={icons[icon]} className="w-52 h-52" />

      <View className="space-y-4 items-center">
        <Text className="text-6xl text-white font-bold">
          {temp.toFixed(1)} °
        </Text>
        <Text className="capitalize text-zinc-200 text-lg font-medium">
          {description}
        </Text>
      </View>

      <View className="flex-row items-center justify-between w-full">
        <TouchableOpacity className="flex-row space-x-2 items-center">
          <FontAwesome5 name="wind" color="#fff" size={20} />
          <Text className="text-[17px] text-white font-semibold">
            {wind.toFixed(2)} km
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row space-x-2 items-center">
          <Ionicons name="water-outline" size={24} color="#fff" />
          <Text className="text-[17px] text-white font-semibold">
            {humidity}%
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row space-x-2 items-center">
          <Ionicons name="time-outline" size={24} color="#fff" />
          <Text className="text-[17px] text-white font-semibold">
            {format(date, "hh:mm a")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurrentWeather;
