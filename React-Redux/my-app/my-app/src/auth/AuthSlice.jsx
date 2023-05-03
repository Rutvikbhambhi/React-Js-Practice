import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:"",
    email:"",
    password:""
}

// export const signupAsync = createAsyncThunk(
//     "users/signupuser",
//     async (user) => {
//       const response = await signupUser(user);
//       return response.data;
//     }
//   );
  
export const signUpUser = createAsyncThunk('signupuser',async(body)=>{
    const res = await fetch("http://localhost:8000/users",{
        method: "post",
        headers: {
            'Content-Type': "application/json",
            
        },
        body: JSON.stringify(body)
    })
    return await res.json();
    // console.log()
})


export const AuthReducer = createSlice({
    name :"users",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(signupAsync.fulfilled, (state, action) => {
            state.status = "idle";
            state.users = action.payload;
            console.log(action.payload);
          })
        //   .addCase(loginAsync.fulfilled, (state, action) => {
        //     state.status = "idle";
        //     state.users = action.payload;
        //     console.log(action.payload);
        //   });
      },

})