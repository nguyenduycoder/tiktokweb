import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url: '',

}

export const urlNavigation = createSlice({
    name: 'urlNavigation',
    initialState,
    reducers: {
        setUrl: (state, data) => {
            const { payload } = data;
            const url = payload.url;

            // const phone = payload.user.phone;
            // const token = payload.access_token;
            return { ...state, url };
        },
        removeUrl: (state) => {
            return initialState;
        }
    },
})

export const { setUrl, removeUrl } = urlNavigation.actions

export default urlNavigation.reducer