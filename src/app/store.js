import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducerss";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
