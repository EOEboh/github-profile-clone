import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const createRequest = (url) => ({url});

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    endpoints: (builder) => ({
        getRepos: builder.query({
            query: () => createRequest('/users/EOEboh/repos?type=owner')
        }),
        getProfile: builder.query({
            query: () => createRequest('users/EOEboh')
        }),
    })

})

export const { useGetReposQuery, useGetProfileQuery } = githubApi;
