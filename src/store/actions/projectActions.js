
export const createProject =(project) => {
    // action
    return (dispatch, getState, {getFirebase, getFirestore}) => {
     // make async call  to database

     const firestore = getFirestore();
     firestore.collection('projects').add({
         ...project, 
         authorFirstName:'Jianyou',
         authorLastName:'Dai',
         authorId: '123',
         createdAT: new Date()
     }).then(()=>{

        dispatch({type: 'CREATE_PROJECT',  project});  // dispatch the action

     }).catch((err) =>{
         dispatch({type: 'CREATE_PROJECT_ERROR', err});
     })


     
    }
};

