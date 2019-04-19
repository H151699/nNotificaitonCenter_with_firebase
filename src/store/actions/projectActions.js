
export const createProject =(project) => {
    // action
    return (dispatch, getState, {getFirebase, getFirestore}) => {
     // make async call  to database
     dispatch({type: 'CREATE_PROJECT',  project});  // dispatch the action
    }
}