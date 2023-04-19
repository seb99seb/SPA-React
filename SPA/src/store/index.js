import { configureStore, /*getDefaultMiddleware*/ } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { creaturesApi } from './apis/creaturesApi';
import { creaturesJSON } from './apis/creaturesJSON';
import { searchCreatureReducer, changeSearchTerm } from './searchCreatureSlice';


export const store = configureStore({
  reducer: {
    [creaturesApi.reducerPath]: creaturesApi.reducer,
    [creaturesJSON.reducerPath]: creaturesJSON.reducer,
    searchCreature: searchCreatureReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(creaturesApi.middleware, creaturesJSON.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchAllCreaturesQuery, useFetchSpecificCreatureQuery } from './apis/creaturesApi';
export { useFetchAllFavCreaturesQuery, useAddPostCreatureQuery } from './apis/creaturesJSON';
export { changeSearchTerm };