export default function( { dispatch }) {
    return next => action => {
        console.log(action);

        next(action);
    };
}

// ================ Sama dengan di atas dan ini adalah penjelasan dari di atas
// export default function( { dispatch }) {
//    return function(next) {
//        return function(action) {
//            console.log(action);

//            next(action);
//        }
//    }
// }