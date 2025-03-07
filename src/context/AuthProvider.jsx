import React, { createContext, useEffect, useState } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    // localStorage.clear()
  const [userData, setUserData] = useState(null)
  

  // setLocalStorage()
  // const data = getLocalStorage()
  // console.log(data.employees)
  // setUserData(getLocalStorage())

  // const {employee, admin} = getLocalStorage()
  // setUserData({employee, admin})
  //iske 2 line k jgh pr useeffect use krte hai

  useEffect(() => {
      setLocalStorage()
      const {employees} = getLocalStorage() 
      // const {employees, admin } local storage se employee or admin ka data uthaya or userdata ke hrough niche pass kr diya
      setUserData(employees)
      // setUserData({employees, admin}) admin ka kaam nii ab sirf employeees uthate h locla storage se
  }, [])
  

  return (

    <div>
     {/* isme data ko provider me jgh provide krte hai */}
     {/* <AuthContext.Provider value={userData}> phle ye tha ab niche naya obj pass hoga */}
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
      
    </div>
  )
}

//authcontext localstorage k data ko sb jgh pahuchane me mdad krta hai


export default AuthProvider;

// iska kaam h local storage se data uthana or logo me baat dena