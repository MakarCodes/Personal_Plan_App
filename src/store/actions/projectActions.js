
import * as actionTypes from '../actionTypes'

export const createProject = project => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'John',
            authorLastName: 'Evelyn',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: actionTypes.CREATE_PROJECT, project});
        }).catch((err) => {
            dispatch({type: actionTypes.CREATE_PROJECT_ERROR, err});
        })
    }
};
