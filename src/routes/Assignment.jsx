/* eslint-disable no-unused-vars */
import { useState } from "react"
import {
    Link,
    Route,
    Routes,
  } from "react-router-dom"

export default function Assignment() {
  return (
    <Routes>
    <Route path="/form" element={<FormView />} />
    {/* Add in routes for table to show the list of the data that youve submitted through the form */}
  </Routes>
  )
}


// Modify this component to submit entries to a /internmembers route to a json server api
function FormView(){
    const [data, setData] = useState({
        name:'',
        address:'',
        dob:'',
        selected:''
    })

// Modify the handleSubmit logic so that theres a POST request to the /internmembers route to your json server api
    const handleSubmit=()=>{
        // 
    }

// Form elements 
    return (<div>

    </div>)
}


// Create a table to show the list of internmembers data. 
// Add feature to edit/update fields of the internmembers data. 
