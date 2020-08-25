import { createSlice } from '@reduxjs/toolkit';

let newClassId = 0;

const classSlice = createSlice({
    name: 'classes',
    initialState: {
        classes: [],
        currentClass: null
    },
    reducers: {
        addClass: {
            reducer(state, action) {
                const { id, className, yearLevel, teacherName } = action.payload;
                state.push({ id, className, yearLevel, teacherName});
            },
            prepare(text) {
                return { payload: {className, id: newClassId++, yearLevel, teacherName}};
            }
        },
        getClassSuccess: {
            reducer(state, action){
                
            }
        }

    }
})