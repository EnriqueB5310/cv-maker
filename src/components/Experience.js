import React from 'react'
import { useState } from 'react'

function Experience() {
  
    const [Experience, setExp] = useState(
        {Position: "", Company: "", City: "", From: "", To: ""}
    )
  
console.log(Experience)

    function handleChange(event) {
        setExp(prevExp => {
            
            return {
                ...prevExp,
                [event.target.name]: event.target.value
            }

        })
    }
  
    return (
 


    <form>

    <div className="form-group">
    <label htmlFor="Position">Position</label>
    <input type="Position" className="form-control" id="Position" onChange={handleChange} name="Position"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="Company">Company </label>
    <input type="Company" className="form-control" id="Company" name="Company"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="Address">City </label>
    <input type="LastName" className="form-control" id="LastName" name="City"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="LastName">From </label>
    <input type="LastName" className="form-control" id="LastName" name="From"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="LastName">To </label>
    <input type="LastName" className="form-control" id="LastName" name="To"></input>
    
    </div>
    
        </form>

  )
}

export default Experience