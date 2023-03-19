import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
    name: "global",
    initialState: {
        success: "",
        register: false,
        login: false,
        adult: 1,
        children: 0,
        room: 1,
        travelDetail: false,
        travellers: [{ email: "", mcode: "", mobile: "", gender: "" }],
        activeTraveller: 0
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
        },
        setAdult: (state, action) => {
            const totalGuests = state.children + state.adult + 1;
            let roomsNeeded = Math.ceil(totalGuests / 4);
            state.adult += 1;
            if (roomsNeeded > state.room) {
                state.room = roomsNeeded;
            }
        },
        decreaseAdult: (state, action) => {
            if (state.adult >= 2) {
                state.adult -= 1;
                const totalGuests = state.children + state.adult;
                let roomsNeeded = Math.ceil(totalGuests / 4);
                if (roomsNeeded < state.room) {
                    state.room = roomsNeeded;
                }
            } else {
                state.adult = 1;
            }
        },
        setChildren: (state, action) => {
            const totalGuests = state.children + state.adult + 1;
            let roomsNeeded = Math.ceil(totalGuests / 4);
            state.children += 1;
            if (roomsNeeded > state.room) {
                state.room = roomsNeeded;
            }
        },
        decreaseChildren: (state, action) => {
            if (state.children >= 1) {
                state.children -= 1;
                const totalGuests = state.children + state.adult;
                let roomsNeeded = Math.ceil(totalGuests / 4);
                if (roomsNeeded < state.room) {
                    state.room = roomsNeeded;
                }
            } else {
                state.children = 0;
            }
        },
        setRoom: (state, action) => {
            const totalGuests = state.children + state.adult + 1;
            let roomsNeeded = Math.ceil(totalGuests / 4);
            if (roomsNeeded > state.room) {
                state.room = roomsNeeded;
            } else if (roomsNeeded < state.room) {
                // reduce the number of rooms only if necessary
                const totalGuestsInPreviousRooms = (state.room - 1) * 4;
                if (totalGuests <= totalGuestsInPreviousRooms) {
                    state.room -= 1;
                }
            }
        },
        decreaseRoom: (state, action) => {
            const totalGuests = state.children + state.adult + 1;
            const roomsNeeded = Math.ceil(totalGuests / 4);
            if (state.room > 1 && roomsNeeded <= state.room - 1) {
                state.room -= 1;
            }
        },
        setTravelDetail: (state, action) => {
            state.travelDetail = true;
        },
        decreaseTravelDetail: (state, action) => {
            state.travelDetail = false;
        },
        addTravellers: (state, action) => {
            state.travellers.push({
                email: "",
                mcode: "",
                mobile: "",
                gender: ""
            })
        },
        removeTraveller: (state) => {
            if (state.travellers.length >= 2) {
                state.travellers = state.travellers.slice(0, -1);
            }
        },
        updateTraveller: (state, action) => {
            const { index, email, mcode, mobile, gender } = action.payload;
            state.travellers[index].email = email;
            state.travellers[index].mcode = mcode;
            state.travellers[index].mobile = mobile;
            state.travellers[index].gender = gender;
        },
        setActiveTraveller: (state, action) => {
            const { index } = action.payload;
            console.log(index, "hbjsadabhsabkbas icbsujibsawjc");
            state.activeTraveller = index;
        }
    }
})

export const { removeTraveller, setActiveTraveller, updateTraveller, addTravellers, setTravelDetail, decreaseTravelDetail, setChildren, decreaseChildren, setRoom, decreaseRoom, setAdult, decreaseAdult, setSuccess, clearMessage, setLogin, setRegister, closeLogin, closeRegister } = globalReducer.actions;

export default globalReducer.reducer;

