import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList} from './TaskList'

export const Dashboard = ({groups}) => (
    <div>
        <h2>Fucking doom</h2>
       {groups.map(group =>(
         
           <ConnectedTaskList id = {group.id} name = {group.name}/>
       ))}
    </div>
)

function mapStateToProps(state)
{
    return {
        groups: state.groups
    }
}
export const ConnectedDashBoard = connect(mapStateToProps)(Dashboard);