import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/store";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  );
};

export default _layout;
