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
        query: (index: string) => {
          return {
            url: '/api/monsters/'+index,
            method: 'GET',
          };
        },
      }),
      /*fetchCreatureImage: builder.query({
        query: (creatureURL) => {
          return {
            url: creatureURL,
            method: 'GET',
          };
        },
      })*/
    };
  },
});

export const {useFetchAllCreaturesQuery, useFetchSpecificCreatureQuery} = creaturesApi;
export { creaturesApi };
