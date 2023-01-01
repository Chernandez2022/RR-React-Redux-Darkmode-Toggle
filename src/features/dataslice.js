import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  objectId: 10245,
  apiData: {},
};

export const dataslice = createSlice({
  name: "data",
  initalState,
  reducers: {
    setData: (state, action) => {
      return { ...state, apiData: action.payload };
    },
    clearData: () => {
      return initalState;
    },
    inputId: (state, action) => {
      return { ...state, objectId: action.payload };
    },
    incrementId: (state) => {
      return { ...state, objectId: state.objectId + 1 };
    },
    decrementId: (state) => {
      return { ...state, objectId: state.objectId - 1 };
    },
  },
});

export const { setData, clearData, incrementId, decrementId, inputId } =
  dataslice.actions;

export const fetchData = () => {
  const fetchDataThunk = async (dispatch, getState) => {
    let state = getState();
    const responce = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`
    );
    const rData = await responce.json();
    dispatch(setData(rData));
  };
  return fetchDataThunk;
};

export default dataslice.reducer;
