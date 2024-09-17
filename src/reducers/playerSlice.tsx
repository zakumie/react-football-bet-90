import { createSlice } from "@reduxjs/toolkit";

const players: any = []
const playerSlide = createSlice({
    name: 'players',
    initialState: players,
    reducers: {
        addPlayer(state, action) {
            return state.push(action.payload);
        },
        updatePlayer(state, action) {
            state.push(action.payload);
        },
        removePlayer(state, action) {
            const playerId = action.payload;
            return state.filter((p: { id: number; }) => p.id === playerId);
        }
    }

})

const { actions, reducer } = playerSlide;
export const { addPlayer, updatePlayer, removePlayer } = actions;
export default reducer;