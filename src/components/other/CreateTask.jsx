import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  
   const [taskTitle, setTaskTitle] = useState('')
   const [taskDescription, setTaskDescription] = useState('')
   const [taskDate, setTaskDate] = useState('')
   const [assignTo, setAssignTo] = useState('')
   const [category, setCategory] = useState('')


   const [newTask, setNewTask] = useState({})

  const SubmitHandler = (e) => {
    e.preventDefault()
    // console.log(taskTitle, taskDescription, taskDate, assignTo, category)

    setNewTask({taskTitle, taskDescription, taskDate, assignTo, category, active:false, newTask:true, failed:false, completed:false})
    // console.log(task);

    // setTaskDate('')
    // setAssignTo('')
    // setCategory('')
    // setTaskDescription('')
    // setTaskTitle('')
    // const data = JSON.parse(localStorage.getItem('employees'))
    const data = userData  // userdata.employees se employee v htaya yha se ----or ye phle kiya tha ---json.parse ke jagah userdata.employees aa gya
    // console.log(userData.employees);
    // console.log(data); 
    // console.log(JSON.parse(data)); //hme json ke form me chahiye ya hm is kaam ko upr hi kr skte hai json.parse lga kr const data me

    data.forEach(function(elem){
      // console.log(elem.firstName)
      if(assignTo == elem.firstName){
        // console.log(elem.tasks);
        elem.tasks.push(newTask)
        console.log(elem);
        elem.taskCounts.newTask = elem.taskCounts.newTask+1
      }
     
    })
    
    // localStorage.setItem('employees', JSON.stringify(data))
     
    setUserData(data)
    console.log(data)


    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
  }


  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          SubmitHandler(e)
        }}
        className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
          
            <div>
               <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
               <input 
               value={taskTitle}
               onChange={(e)=>{
                 setTaskTitle(e.target.value)
               }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="MaKe A UI DEsiGn" />
            </div>

            <div>
               <h3 className="text-sm text-gray-300 mb-0.5">date</h3>
               <input 
               value={taskDate}
               onChange={(e)=>{
                 setTaskDate(e.target.value)
               }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="date" />
            </div>

            <div>
               <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
               <input 
               value={assignTo}
               onChange={(e)=>{
                 setAssignTo(e.target.value)
               }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="employee name" />
            </div>

            <div>
               <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
               <input 
               value={category}
               onChange={(e)=>{
                 setCategory(e.target.value)
               }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="design, dev, etc" />
            </div>

          </div>

          
          <div className="w-2/5 flex flex-col items-start">
              <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
              <textarea 
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
              <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask;
