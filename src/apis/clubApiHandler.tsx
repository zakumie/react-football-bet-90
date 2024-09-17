import clubApiClient from './clubApiClient'

export function getClubs() {
    return clubApiClient.get('/club');
}

export function getClubById(id: number) {
    return clubApiClient.get('/club', {
        params: {
            id: id
        }
    });
}