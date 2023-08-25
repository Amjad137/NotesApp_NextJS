// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import rootReducer from "./rootReducer";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk],
// });

// export default store;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice"; // Import your slice reducer

const store = configureStore({
  reducer: {
    notes: notesReducer,
    // Add more reducers if needed
  },
});

export default store;
