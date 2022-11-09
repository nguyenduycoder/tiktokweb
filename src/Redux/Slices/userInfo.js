import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    user_id: '',

}

export const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, data) => {
            const { payload } = data;
            const name = payload.name;
            const user_id = payload.user_id;
            // const phone = payload.user.phone;
            // const token = payload.access_token;
            return { ...state, name, user_id };
        },
        removeUserInfo: (state) => {
            return initialState;
        }
    },
})

export const { setUserInfo, removeUserInfo } = userInfo.actions

export default userInfo.reducer