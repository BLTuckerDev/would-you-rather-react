export const LOAD_USERS = "loadUsers";


export function loadUsers(users){
    return {
        type: LOAD_USERS,
        users
    }
}