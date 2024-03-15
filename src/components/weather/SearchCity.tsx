import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import cityList from "@/db/cities.json";
import { CityRaw } from "@/utils/types";
import { setCity, useCity } from "@/store/features/city";
import store from "@/store";

const SearchCity = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [cities, setCities] = useState<CityRaw[]>([]);

  const { city: selectedCity } = useCity();

  const inputRef = useRef<TextInput | null>(null);

  const changeInputVisiblity = () => {
    setVisible((visible) => !visible);
  };

  const changeSelectedCity = (city: CityRaw) => {
    store.dispatch(setCity(city));

    setVisible(false);
  };

  const changeInputText = (term: string) => {
    if (term.length >= 2) {
      setCities(
        cityList.filter((city) =>
          city.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
    } else {
      setCities([]);
    }
  };

  useEffect(() => {
    visible ? inputRef.current?.focus() : setCities([]);
  }, [visible]);

  return (
    <View className="relative z-50">
      <View
        className={`flex-row justify-end ${
          visible && "bg-white/30"
        } rounded-full items-center h-14`}
      >
        {visible && (
          <TextInput
            ref={inputRef}
            onChangeText={changeInputText}
            placeholder="Search"
            className="px-6 flex-1 h-full text-white"
            placeholderTextColor="#eee"
          />
        )}

        <TouchableOpacity
          className="h-12 w-12 items-center justify-center bg-white/50 rounded-full mr-1"
          onPress={changeInputVisiblity}
        >
          <Feather name="search" size={20} color="#52525b" />
        </TouchableOpacity>
      </View>

      <ScrollView className="absolute top-full z-50 bg-slate-300 w-full rounded-2xl mt-4 max-h-64 bg-white/50">
        {cities.map((city, index) => (
          <TouchableOpacity
            key={city.id}
            onPress={() => changeSelectedCity(city)}
            className={`flex-row p-4 items-center space-x-4 flex-1 
            ${index + 1 < cities.length && "border-b"} 
            ${city.id === selectedCity.id && "bg-zinc-500"} 
            border-zinc-400`}
          >
            <Feather name="map-pin" color="#ccc" size={18} />
            <Text className="text-zinc-600">{city.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchCity;
