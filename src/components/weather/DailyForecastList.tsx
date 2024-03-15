import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import React from "react";
import { List } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";
import icons from "@/utils/icons";
import { format } from "date-fns";

type Props = {
  items: List[];
};

export default function DailyForecastList({ items }: Props) {
  return (
    <View className="space-y-6">
      <TouchableOpacity className="flex-row space-x-2 items-center">
        <Ionicons name="calendar-sharp" color="#fff" size={20} />
        <Text className="text-zinc-200">Daily forecast</Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.dt}
            className="bg-white/30 rounded-2xl mr-4 space-x-4 p-3 items-center flex-row"
          >
            <Image source={icons[item.weather[0].icon]} className="w-12 h-12" />

            <Text className="text-white">{format(item.dt_txt, "EEEE")}</Text>

            <Text className="text-white text-lg font-bold">
              {item.main.temp.toFixed(1)} °
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
