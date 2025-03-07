import React ,{useState} from 'react'

const Login = ({handleLogin}) => {

  //agr upr me props k jgh hm handle login le to console me pura function aa jaeyga
  // console.log(handleLogin) //isse console me fun handlelogin dekhne ko milta hain
    //upr props tb liya gya hai jb handlelogin liya gya hai app.jsx me
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


   const submitHandler = (e)=> {
    e.preventDefault()
    handleLogin(email, password)
    //  console.log("hello guys, Form Submitted")
    console.log("email is", email);
    console.log("password is", password);

    setEmail("") //isse email khali ho jayega likhne k bad
    setPassword("")  //same as above
   }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">

        <form 
        //  onSubmit={submitHandler}
         onSubmit={(e)=>{
          submitHandler(e);
         }}
        //  onSubmit={(e) => {e.preventDefault()}}  // Prevent form from submitting to server
         className="flex flex-col items-center justify-center">
            <input
            value={email} 
            onChange={(e)=>{
              // console.log(e)
              setEmail(e.target.value)
            }}
            required 
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gyay-400" type="email" placeholder="Enter Your Email"/>
            <input 
            value={password}
            onChange={(e)=>{
              // console.log(e)
              setPassword(e.target.value)
            }}
            required 
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gyay-400" type="password" placeholder="Enter Password"/>
            <button className="mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">Log in</button>
        </form>

      </div>      
    </div>
  )
}

export default Login
