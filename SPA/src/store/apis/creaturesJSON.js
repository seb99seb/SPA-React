import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const creaturesJSON = createApi({
  reducerPath: 'creaturesJSON',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/'
  }),
  endpoints(builder) {
    return {
      fetchAllFavCreatures: builder.query({
        query: () => {
          return {
            url: 'creatures',
            method: 'GET',
          };
        },
      }),
      addPostCreature: builder.query({
        query: (creature) => {
          return {
            url: 'creatures',
            method: 'POST',
            body: creature
          };
        },
      }),
    };
  },
});

export const {useFetchAllFavCreaturesQuery, useAddPostCreatureQuery} = creaturesJSON;
export { creaturesJSON };
