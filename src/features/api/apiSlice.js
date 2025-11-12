// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// const getToken = () => {
//   const token = localStorage.getItem("Token");
//   return token;
// };


// //http://localhost:5000
// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:9000/",
    
    
//     prepareHeaders: async (headers) => {
//       const token = getToken();
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//     },
//   }),
  
//   tagTypes: [
//     "CurrentUser",
//     "CreateAccount",
//     "AllAccounts",
//     "Account",
//     "AgentSchools",
//     "TierOptions",
//     "ClassRoom",
//     "Objectives",
//     "Question",
//     "Quiz",
//     "AddChild",
//     "User",
//     "Notification",
//     "Chat",
//     "YearGroup",
//     "Arm",
//     "Subject",
//     "AgentEarnings",
//     "CommissionSettings",
//     "AllEarnings",
//     "ActiveUsers",
//     "SchoolActivity",
//   ],
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (user) => ({
//         url: "/api/users/login",
//         method: "POST",
//         body: user,
//       }),
//     }),

//     currentUser: builder.query({
//       query: () => "/api/users/getCurrentUser",
//       providesTags: (result) =>
//         result
//           ? [{ type: "CurrentUser", id: result._id }]
//           : ["CurrentUser", "CreateAccount"],
//     }),

//     createUser: builder.mutation({
//       query: (payload) => ({
//         url: "/api/users/createUser",
//         method: "POST",
//         body: payload,
//       }),
//       //invalidatesTags: ["CreateAccount", "AllAccounts"],
//     }),

//     getUsersByAccountId: builder.query({
//       query: (accountId) => `/api/users/getUsersByAccountId/${accountId}`,
//       providesTags: ["User"],
//     }),

//     validateEmailAndRegisterUser: builder.mutation({
//       query: (payload) => ({
//         url: "/api/users/validateEmailAndRegisterUser",
//         method: "POST",
//         body: payload,
//       }),
//     }),

//     updatePassword: builder.mutation({
//       query: (payload) => ({
//         url: "/api/users/updatePassword",
//         method: "POST",
//         body: payload,
//       }),
//     }),

 

//   }),
// });

// export const {
//   useLoginMutation,
//   useCurrentUserQuery,
//   useCreateAccountMutation,
  
// } = apiSlice;
// frontend/src/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
  const token = localStorage.getItem("token"); // Changed from "Token" to "token"
  return token;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: //"http://localhost:9000/",
    "https://kingscare-backend.onrender.com" ,  // Changed to match your backend port
    prepareHeaders: async (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  
  tagTypes: [
    "User",
    "Auth",
    "Services",
    "Caregivers",
    "Appointments"
  ],
  
  endpoints: (builder) => ({
    // Auth endpoints
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/auth/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    getCurrentUser: builder.query({
      query: () => "/api/auth/me",
      providesTags: (result) =>
        result ? [{ type: "User", id: result._id }] : ["User"],
    }),

    // User management endpoints
    updateProfile: builder.mutation({
      query: (userData) => ({
        url: "/api/users/profile",
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    // Services endpoints
    getServices: builder.query({
      query: () => "/api/services",
      providesTags: ["Services"],
    }),

    getServiceById: builder.query({
      query: (serviceId) => `/api/services/${serviceId}`,
      providesTags: (result, error, id) => [{ type: "Services", id }],
    }),

    // Caregivers endpoints
    getCaregivers: builder.query({
      query: () => "/api/caregivers",
      providesTags: ["Caregivers"],
    }),

    // Appointments endpoints
    createAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: "/api/appointments",
        method: "POST",
        body: appointmentData,
      }),
      invalidatesTags: ["Appointments"],
    }),

    getUserAppointments: builder.query({
      query: (userId) => `/api/appointments/user/${userId}`,
      providesTags: ["Appointments"],
    }),

    // Password reset endpoints (you can add these later)
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/api/auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: "/api/auth/reset-password",
        method: "POST",
        body: { token, newPassword },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useUpdateProfileMutation,
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useGetCaregiversQuery,
  useCreateAppointmentMutation,
  useGetUserAppointmentsQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = apiSlice;