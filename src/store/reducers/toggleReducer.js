import { createSlice } from "@reduxjs/toolkit";

const toggleReducer = createSlice({
    name: "toggleReducer",
    initialState: {
        isRegister: false,
        isLogin: false,
        isResponsiveNav: false,
        isPackagePhoto: false
    },
    reducers: {
        setIsRegister: (state, action) => {
            state.isRegister = action.payload;
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        setIsResponsiveNav: (state, action) => {
            state.isResponsiveNav = action.payload;
        },
        setIsPackagePhoto: (state, action) => {
            state.isPackagePhoto = action.payload;
        }
    },
});

export const { setIsLogin, setIsRegister, setIsResponsiveNav, setIsPackagePhoto } =
    toggleReducer.actions;

export default toggleReducer.reducer;
