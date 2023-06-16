import React from 'react'

function PersonalD({handleChange}) {
  return (
  
    <form>

<div className="htmlForm-group">
<label htmlForm="FirstName">First Name</label>
<input type="text" className="form-control" id="FirstName" name="FirstName" onChange = {handleChange}></input>

</div>

<div className="htmlForm-group">
<label htmlForm="LastName">Last Name </label>
<input type="LastName" className="form-control" id="LastName" name="LastName" onChange = {handleChange} ></input>

</div>

<div className="htmlForm-group">
<label htmlform="Address">Address </label>
<input type="text" className="form-control" id="Address" name="Address" onChange = {handleChange}></input>

</div>

<div className="htmlForm-group">
<label htmlForm="LastName">Email </label>
<input type="text" className="form-control" id="Email" name="Email" onChange = {handleChange}></input>

</div>

<div className="htmlForm-group">
<label htmlForm="LastName">Description  </label>
<input type="text" className="form-control" id="Description" name="Description" onChange = {handleChange}></input>

</div>

    </form>

  )
}

export default PersonalD