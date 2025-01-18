import { createSlice } from "@reduxjs/toolkit";




const userSlice = createSlice({
    name: 'user',
    initialState: {
        info: [], // Thông tin người dùng
        login: false, //Chưa đăng nhập
        // {id, title, email, image, gender}
    },
    reducers:{
       dangNhap: ( state,action) => {
            let user = action.payload;
            state.info = user;
            state.login = true;
       },
       capNhat: (state, action) => {

       },

       dangXuat: (state) => {
            state.info = [];
            state.login = false;
       }
    }
})

export const {dangXuat, dangNhap, capNhat} = userSlice.actions;
export default userSlice.reducer;

