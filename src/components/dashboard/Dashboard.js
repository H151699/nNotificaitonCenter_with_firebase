import React, {Component} from 'react'
import Notifications from './Notifications'

import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
// react-redux : a glue library, that glues redux to react
// here connect Dashboard component with redux store



class Dashboard extends Component{
    render(){
        //console.log(this.props);
        const {projects} = this.props;
        return (
            <diV className="dashboard container">

                <div className="row">
                    
                    <div className="col s12 m6"> 
                        <ProjectList projects ={projects}/>
                    </div> 
                        

                    <div className="col s12 m5 offset-m1">
                    <Notifications/>
                    </div>
                        
                </div>
            </diV>
        )
    }

}



// map the state from the store to the props in this componet
// takes the state of the store, 

const mapStateToProps = (state) => {
    return {
        // return an object that represent which properties are attached to the props of this compent
        // then access them inside the componet
        // objects: state. project(root).property in the projectReducer
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)
