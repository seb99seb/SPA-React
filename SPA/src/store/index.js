import { configureStore, /*getDefaultMiddleware*/ } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { creaturesApi } from './apis/creaturesApi';
import { searchCreatureReducer, changeSearchTerm } from './searchCreatureSlice';


export const store = configureStore({
  reducer: {
    [creaturesApi.reducerPath]: creaturesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    searchCreature: searchCreatureReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(creaturesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchAllCreaturesQuery, useFetchSpecificCreatureQuery, useFetchCreatureImageQuery } from './apis/creaturesApi';
export { changeSearchTerm };