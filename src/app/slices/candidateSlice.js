// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URI = "http://localhost:8800/api";

// const baseQuery = fetchBaseQuery({ baseUrl: API_URI });

// export const candidateSlice = createApi({
//   reducerPath: "candidateSlice",
//   baseQuery,
//   tagTypes: ["candidate"],
//   endpoints: (builder) => ({
//     getCandidates: builder.query({
//       query: () => ({
//         method: "GET",
//         url: `/candidates`,
//       }),
//     }),
//   }),
//   endpoints: (builder) => ({
//     createCandidates: builder.mutation({
//       query: ({body}) => ({
//         method: "POST",
//             url: `/candidates`,
//         body
//       }),
//     }),
//   }),
// });

// export const { useGetCandidatesQuery, useCreateCandidatesMutation } = candidateSlice;
