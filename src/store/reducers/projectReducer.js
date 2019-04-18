const initState = {
    
    projects:[
       {  id: '1', title: 'hohohaha', content: 'nihaoniahoniaho'},
       {  id: '2', title: 'gugugaga', content: 'nihaoniahoniaho'},
       {  id: '3', title: 'heyheyhaha', content: 'nihaoniahoniaho'}
    ]
}

// set return initial state 
const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer;


