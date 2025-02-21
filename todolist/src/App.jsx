import React, { useState } from 'react'
import "./App.css"; 


export default function App() {


  const deletehand =(i)=>{
    let copytask =[...main]
    copytask.splice(i,1)
    setmain(copytask)
  }





  const [title, settitle] = useState("")
  const [dis, setdis] = useState("")
  const [main, setmain] = useState([]) // array  wali hook bnaya taki usme saara store rahe 
  const  submithandler = (e)=>{ e.preventDefault() // .preventDefault() prevent krta h ki page reload n ho ager relaod ho jaye 
    
    setmain([...main ,{title,dis}])  // main to jo bhi tha uske sath sath title jo dis 
    console.log(main)

    setdis("") // ek bar add krne k bad input place kahali ho jaygea taki dursa inputs le sko es liye setdis ka value empty kr diye 
    settitle("") // same for title k tittle k liye bhi
  }
   
    
   // ess fution ka kam h jo bhi array mai h usko ui mai show krwana main array mai maping kr rahe h t=elemnt h or i = index of r=that array or firr usko div bna k uski show krwa rhae h elemt  of title and elemnt of dis h5 tag k ander  
   let rendertask;
   if (main.length >0 ){
      rendertask = main.map((t,i)=>{
      return <div key={i} className='showdata'>
        <h5>{t.title}</h5>
        <h5>{t.dis}</h5>
        <button onClick={()=>{deletehand(i)} }className='delete-btn'>Delete</button>
      </div>
    })}
    else{
      rendertask =<p> no task available </p>

    }
    
  
  return (
    <div>
      <h1 className='my_do_to'> MY TO-DO LIST </h1>
      <form onSubmit={submithandler}>
        <input type="text"  className='worklist' placeholder='ENTER THE WORK'
        value={title}
        onChange={(e)=>{               // trigger kr rah h 
          settitle(e.target.value)     // settitle (e.target.value ) esko likhne se jo bhi usse place m likhna hoga woh react k pass chla jayega or usko update kr dega or settitle m dal dega // esme react data lene k liye ready ho jayega 
        }}  />
        
        
        <input type="text"  className='worklist' placeholder='ENTER THE WORK DIS' 
        value={dis}
        onChange={(e)=>{
          setdis(e.target.value)
        }} />
        <button>ADD TASK</button>

      </form>
      <hr />
      <div className='data' >
        <ul>
          {rendertask}
        </ul>


      </div>

    </div>
  )
}
 