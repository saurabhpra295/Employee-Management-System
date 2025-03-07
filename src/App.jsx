import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
// import { useEffect } from 'react';
// import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {

  const [user, setUser] = useState(null) //agr null k jgah saurabh hota to login wala component nii milta
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData.employees) //isme dikkat aa rha

  useEffect(() => {
    // if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      // console.log(loggedInUser);
      if(loggedInUser){
        // console.log("logged in user")
      //   setUser(loggedInUser.role)
      //ye dono phle ka hai
      const userData = JSON.parse(loggedInUser)
      // console.log(userData)
         setUser(userData.role)
         setLoggedInUserData(userData.data) //jo v employee nikla hai wha upr if se uska data loggedinuser me save ho jayega
      }
    // }
  },[]);
  


  const handleLogin = (email,password)=> {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      // console.log(user) 
      // console.log("This is Admin")
    }else if(userData){
      const employee = userData.find((e)=> email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee) //jo v employee nikla hai wha upr if se uska data loggedinuser me save ho jayega
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:'employee'}))
      }
      // console.log(user)
      // console.log("This is User")
    }
    else{
      alert("Invalid Credentials")
    }
    // console.log(email,password)
  }

  // handleLogin('admin@me.com', 123)
  // handleLogin('user@me.com', 123) //isko direct nii call krna isko login me jaakr call krna hai

  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // }, []);
   //side stack ka kaam krta hai main function jo chl rha usme side func chalane ka kaam krta hai
    
  //  const data = useContext(AuthContext)
    //  console.log(data) //ye chl rha hai main context me agr user hai to saurabh, agr user nii h to null

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''} 
      {/* agr user nii h to login kr lena , '' iska mtlb agr user hai to khali chor dena */}
      {/* <Login />  */}
      {/* <EmployeeDashboard /> */}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
      {/* agr user barabar hai admin k to admindashboard ko render kr dena agr aisa nii hota to employeedashboard ko render kr dena */}
      {/* <AdminDashboard /> */}
      
    </>
  )
}

export default App;
