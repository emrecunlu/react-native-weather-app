import { CityRaw } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import cities from "@/db/cities.json";
import store, { RootState } from "..";
import { useSelector } from "react-redux";

const defaultSelectedId: number = 35;

export interface CityState {
  city: CityRaw;
}

const initialState: CityState = {
  city: cities.find((city) => city.id === defaultSelectedId)!,
};

const city = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<CityRaw>) => {
      state.city = action.payload;
    },
  },
});

export default city.reducer;
export const { setCity } = city.actions;
export const useCity = () => useSelector((state: RootState) => state.city);
