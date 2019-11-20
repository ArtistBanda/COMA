import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s20 m3">
                        <ProjectList />
                    </div>
                    <div className="col s10 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard    