import { createSlice } from "@reduxjs/toolkit";
import { Course } from "@src/types/course";

type State = {
    purchasedCourses: Course[];
};

const initialState: State = {
    purchasedCourses: []
};

const domainsSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase("courses/purchase", (state, action) => {
            state.purchasedCourses.push(action.payload);
        });
    }
});

export default domainsSlice.reducer;
