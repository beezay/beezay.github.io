import { configureStore } from "@reduxjs/toolkit";

import weatherAPIReducer from '../slices/WeatherAPISlice/weatherAPISlice'

export const store = configureStore({
  reducer: {
    weatherRoot: weatherAPIReducer
  },
});
