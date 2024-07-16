"use client"
import { useEffect} from "react"

export default function error(error,reset) {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className="text-center mt-10">
      <h1>Something Went Wrong. Please try Again Later.</h1>
      <button className="hover:text-amber-600 " onClick={()=> reset()}>Try Again</button>
    </div>
  )
}
