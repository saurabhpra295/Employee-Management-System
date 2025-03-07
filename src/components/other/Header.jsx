import React, { useState } from 'react'


const Header = (props) => { //yha v props aa gya employeedashboard or admin ke baad
  // console.log(data)
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    // localStorage.clear()
    // window.location.href = '/'
    // console.log(props.changeUser);
    props.changeUser('') //yha is fun ko khali chir diya to login open hoga logout krne ke baad ..or page v reload nii hoga  or app.jsx me ka loginhandle chlege
      // window.location.reload() //yha employee se login krenge or application me jaakr loggedinuser ka logout krke dekhenge to role wagera khali ho jayega pr logout nii hoga i mean page refresh nii hoga or hmlog app.jsx me jaake useeffect se setuser wala property admindashboard me niche jaakr pass kr denge
  }


  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">username 👋</span></h1>
      <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small">Log out</button>
    </div>
  )
  }

export default Header;
