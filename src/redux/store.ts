





import { configureStore } from "@reduxjs/toolkit";

import sliceHome from "../App/home/sliceHome";



const store = configureStore({
  reducer: {
     homePage:sliceHome.reducer
  },
});

export default store
