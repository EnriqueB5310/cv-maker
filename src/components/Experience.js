import React from 'react'


function Experience({handleChange}) {
  
   
    
  


    
    return (
 


    <form>

    <div className="form-group">
    <label htmlFor="Position">Position</label>
    <input type="text" className="form-control" id="Position" onChange={handleChange} name="Position"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="Company">Company </label>
    <input type="text" className="form-control" id="Company" onChange={handleChange} name="Company"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="Address">City </label>
    <input type="text" className="form-control" id="City" onChange={handleChange} name="City"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="LastName">From </label>
    <input type="date" className="form-control" id="From" onChange={handleChange} name="From"></input>
    
    </div>
    
    <div className="form-group">
    <label htmlFor="LastName">To </label>
    <input type="date" className="form-control" id="To" onChange={handleChange} name="To"></input>
    
    </div>
    
        </form>

  )
}

export default Experience