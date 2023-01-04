import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { OPEN_WEATHER_API } from "core/consts";

export const weatherAPIInitialState = {
  isLoadingWeatherData: false,
  weatherData: {
    currentTemprature: null,
    currentTime: "",
    timezone: "",
    latitude: "",
    longitude: "",
    tempratureUnit: "",
  },
};

export const fetchWeatherAPIData = createAsyncThunk(
  "feat/featchWeatherData",
  async () => {
    const res = await axios.get(OPEN_WEATHER_API);
    const json = res.data;
    console.log("response---", json);
    const { current_weather, timezone, daily_units } = json;
  }
);

export const weatherAPISlice = createSlice({
  name: "weatherState",
  initialState: weatherAPIInitialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default weatherAPISlice.reducer;
