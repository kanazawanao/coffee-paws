import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'app/rootReducer';

const store = configureStore({
  reducer: rootReducer(),
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });

    return middlewares;
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
