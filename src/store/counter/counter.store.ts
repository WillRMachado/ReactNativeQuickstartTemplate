import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
});

function sleep(ms: Number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const asyncIncrement = (amount: number): Function => {
  return async function (dispatch) {
    await sleep(3000);
    dispatch(increment(amount));
  };
};

export const {increment, decrement} = counter.actions;
export {asyncIncrement};
export default counter.reducer;
