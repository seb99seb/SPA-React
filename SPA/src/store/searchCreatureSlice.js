import {createSlice} from '@reduxjs/toolkit'; 

const searchCreatureSlice = createSlice({
    name: 'searchCreature',
    initialState: {
        searchTerm: ''        
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        }     
    }
})

//actions er ActionCreators der kan tage et payload som argument, fx er removeCar en ActionCreator-function der tager et payload som 
//argument og returnere en Action: {type: "cars/removeCar", payload: arg}. Når den bliver kaldt med dispath-hooket fra en komponent vil Storens dispatcher
//kalde reduceren: 'removeCar' i sclice: 'cars' (samt extraReducere i andre slices der "lytter"på "cars/removeCars")   
export const {changeSearchTerm} = searchCreatureSlice.actions; 
export const searchCreatureReducer = searchCreatureSlice.reducer;  //combined reducers