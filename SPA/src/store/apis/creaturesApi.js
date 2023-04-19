import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const creaturesApi = createApi({
  reducerPath: 'creatures',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.dnd5eapi.co'
  }),
  endpoints(builder) {
    return {
      fetchAllCreatures: builder.query({
        query: () => {
          return {
            url: '/api/monsters',
            method: 'GET',
          };
        },
      }),
      fetchSpecificCreature: builder.query({
        query: (index) => {
          return {
            url: '/api/monsters/'+index,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {useFetchAllCreaturesQuery, useFetchSpecificCreatureQuery, useFetchCreatureImageQuery} = creaturesApi;
export { creaturesApi };
