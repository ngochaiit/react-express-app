import React from 'react';
import {connect} from 'react-redux';

export const TaskList = ({tasks, name}) =>(
    <div>
        <h3>{name}</h3>
        {tasks.map(task => (<div>{task.name}</div>))}
    </div>
)

const mapStateToprops = (state, ownProps) =>
{
    let groupID = ownProps.id;
    console.log("fucking dog", groupID);
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
};
export const ConnectedTaskList = connect(mapStateToprops)(TaskList); 