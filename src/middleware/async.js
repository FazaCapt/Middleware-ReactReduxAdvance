export default function( { dispatch }) {
    return next => action => {
        // if action dows nor have payload
        // or, the payload does not have a .then property
        // we dont care about it, send it on 
        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        console.log('We dont have a promise', action);
    };
}
