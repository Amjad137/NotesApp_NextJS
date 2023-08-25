// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   notesData: [],
// };

// const notesSlice = createSlice({
//   name: "notes",
//   initialState,
//   reducers: {
//     setNotesData: (state, action) => {
//       state.notesData = action.payload;
//     },
//   },
// });

// export const { setNotesData } = notesSlice.actions;
// export default notesSlice.reducer;

// reducers/notesReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const getNotesData = await axios.get("/");
  const receivedNotesData = getNotesData.data.AllNotes;
  return receivedNotesData;
});

const initialState = {
  notes: [], // Initial state for notes
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the fetchNotes fulfilled action
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.isLoading = true; // Set loading to true when fetch is pending
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.notes = action.payload;
        state.isLoading = false; // Set loading to false when fetch is successful
      });
  },
});

export default notesSlice.reducer;
