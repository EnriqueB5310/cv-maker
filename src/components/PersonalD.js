import React from 'react'

function PersonalD({handleChange}) {
  return (
  
    <form>

<div className="htmlForm-group">
<label htmlForm="FirstName">First Name</label>
<input type="text" className="form-control" id="firstName"></input>

</div>

<div className="htmlForm-group">
<label htmlForm="LastName">Last Name </label>
<input type="LastName" className="form-control" id="LastName"></input>

</div>

<div className="htmlForm-group">
<label htmlform="Address">Address </label>
<input type="text" className="form-control" id="Address"></input>

</div>

<div className="htmlForm-group">
<label htmlForm="LastName">Email </label>
<input type="text" className="form-control" id="Email"></input>

</div>

<div className="htmlForm-group">
<label htmlForm="LastName">Description  </label>
<input type="text" className="form-control" id="Description"></input>

</div>

    </form>

  )
}

export default PersonalD