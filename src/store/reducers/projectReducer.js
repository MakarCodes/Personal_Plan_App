
import * as actionTypes from '../actionTypes'

const initState = {
    projects: [
        {id: '1', title: 'Learn React', content: 'blah blah blah'},
        {id: '2', title: 'Make your application maintainable', content: 'blah blah blah'},
        {id: '3', title: 'Implement Redux', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.CREATE_PROJECT:
            console.log('project created', action.project);
            return state;
        case actionTypes.CREATE_PROJECT_ERROR:
            console.log('project created has ERROR', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer;