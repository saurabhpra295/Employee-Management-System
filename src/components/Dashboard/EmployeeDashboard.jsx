import React from 'react'
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
const EmployeeDashboard = (props) => { //yha pr phle {data} ye tha iske jagah pr props aa gya
  // console.log(data)
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      {/* <h1>{data.id}</h1> */}
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    
    </div>
  )
}

export default EmployeeDashboard;
