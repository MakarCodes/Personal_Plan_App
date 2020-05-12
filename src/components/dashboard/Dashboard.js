import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects
    }
}

// whenever collection id db changed, the hoc firestoreConnect will know and update and sync data in redux store
// when dashboard component is active it will be sync with firestore db collection projects

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(Dashboard);
