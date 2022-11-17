import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isopen: false,
    idpost: '',
}

export const modalMode = createSlice({
    name: 'modalMode',
    initialState,
    reducers: {
        setImode: (state, data) => {
            const { payload } = data;
            const isopen = payload.isopen;
            const idpost = payload.idpost;
            return { ...state, isopen, idpost };
        },
        remode: (state) => {
            return initialState;
        }
    },
})

export const { setImode, remode } = modalMode.actions

export default modalMode.reducer