import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavoritesState={
    ids: number[];
    showOnlyFavorites: boolean;
}
const initialState: FavoritesState={
    ids:[],
    showOnlyFavorites: false
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<number>) {
            const id = action.payload;
            const index = state.ids.indexOf(id)
            if (index>=0) state.ids.splice(index,1)
            else state.ids.push(id)
        },
        setShowOnlyFavorites(state, action: PayloadAction<boolean>){
            state.showOnlyFavorites = action.payload
        }
    }
})

export const {toggleFavorite, setShowOnlyFavorites} = favoritesSlice.actions
export default favoritesSlice.reducer;