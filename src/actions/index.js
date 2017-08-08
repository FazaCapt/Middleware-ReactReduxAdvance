import {
    FETCH_USERS
} from './types';

export function fetchUSers() {
    return {
        type: fetchUSers,
        payload: [
            { name: 'Jane' },
            { name: 'Alex' },
            { name: 'Jim' }
        ]
    };
}