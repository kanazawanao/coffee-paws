import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TYPE_BASE = 'AuthApi';

type StateType = {
  user: any;
};

const initialState: StateType = {
  user: null,
};

const setUser = createAction<any>(`${TYPE_BASE}/setUser`);

export function useAuthApiActions() {
  const dispatch = useDispatch();

  const dispatchSetUser = React.useCallback(
    (user: any) => {
      dispatch(setUser(user));
    },
    [dispatch],
  );

  return {
    setUser: dispatchSetUser,
  };
}

const slice = createSlice({
  name: TYPE_BASE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
  },
});

export function useSelectAuthState() {
  return useSelector((state: RootState) => state.authApi);
}

export default slice.reducer;
