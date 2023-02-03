import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice(
    {
        name:'dataSlice',
        initialState:[{ name: 'Jhony', id: 1,age:'24',course:'MERN',batch:'Octomber' }],
        reducers:{
            editData:(store,action)=>{
                console.log("edit")
                console.log(action.payload.index)
                store[action.payload.index]=action.payload.newObj
                return (store)

            },
            addData:(store,action)=>{
                console.log("add")
                store.push(action.payload)
            }
        }


    }
)
export const {editData,addData}=dataSlice.actions;
export default dataSlice.reducer;