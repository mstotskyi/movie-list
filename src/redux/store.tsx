import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

import logger from "redux-logger";

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log(store.getState());
