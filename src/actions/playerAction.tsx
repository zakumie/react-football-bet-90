export const addPlayer = (player: any) => {
    return {
        type: 'ADD',
        payload: player
    }
}

export const updatePlayer = (player: any) => {
    return {
        type: 'UPDATE',
        payload: player
    }
}