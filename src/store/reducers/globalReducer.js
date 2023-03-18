import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
    name: "global",
    initialState: {
        success: "",
        register: false,
        login: false,
    },
    reducers: {
        setSuccess: (state, action) => {
            console.log(action.payload);
            state.success = action.payload;
        },
        clearMessage: (state) => {
            state.success = "";
        },
        setLogin: (state, action) => {
            state.login = true;
        },
        closeLogin: (state, action) => {
            state.login = false;
        },
        setRegister: (state, action) => {
            state.register = true;
        },
        closeRegister: (state, action) => {
            state.register = false;
        }
    }
})

export const { setSuccess, clearMessage, setLogin, setRegister, closeLogin, closeRegister } = globalReducer.actions;

export default globalReducer.reducer;

