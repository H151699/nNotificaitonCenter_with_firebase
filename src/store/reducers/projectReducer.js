const initState = {
    
    projects:[
       {  id: '1', title: 'hohohaha', content: 'nihaoniahoniaho'},
       {  id: '2', title: 'gugugaga', content: 'nihaoniahoniaho'},
       {  id: '3', title: 'heyheyhaha', content: 'nihaoniahoniaho'}
    ]
}

// set return initial state 
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project )
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;


    }
   
};

export default projectReducer;


