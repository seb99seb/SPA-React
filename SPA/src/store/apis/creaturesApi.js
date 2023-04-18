import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const creaturesApi = createApi({
  reducerPath: 'creatures',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.dnd5eapi.co/api/monsters'
  }),
  endpoints(builder) {
    return {
      fetchAllCreatures: builder.query({
        query: () => {
          return {
            method: 'GET',
          };
        },
      }),
      fetchSpecificCreature: builder.query({
        query: (index) => {
          return {
            url: '/'+index,
            method: 'GET',
          };
        },
      })
    };
  },
});

export const {useFetchAllCreaturesQuery, useFetchSpecificCreatureQuery} = creaturesApi;
export { creaturesApi };
