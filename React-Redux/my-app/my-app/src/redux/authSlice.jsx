import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

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


const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addToken: (state,action)=>{
            state.token = localStorage.getItem("token")
        },

        addUser: (state,action)=>{
            state.user = localStorage.getItem("user")
        },

        logout: (state,action)=>{
            state.token = null
            localStorage.clear();
        }

    },
    extraReducers:{
        [signUpUser.pending]: (state,action)=>{
            state.loading = true
        },
        [signUpUser.fulfilled]: (state,{payload:{error,msg,token,user}})=>{
            state.loading = false;
            if(error){
                state.error = error;
            }else{
                state.msg = msg;
                state.token = token;
                state.user = user;

                localStorage.setItem('msg',msg)
                localStorage.setItem('user',JSON.stringify())
                localStorage.setItem('token',token)
            }
        },
        [signUpUser.rejected]: (state,action)=>{
            state.loading = true
        }
    }
})

export const {addToken,assUser,logout}= authSlice.actions;
export default authSlice.reducer;