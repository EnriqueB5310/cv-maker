 import React from 'react'
 
 function FinalCV({FirstName, LastName, Address, Email, Description,Position, Company, City, From, To}) {
   return (
    <div>
     <div className= "d-flex justify-content-center pt-3">
      <h4> {FirstName} {LastName} </h4>
     
     
     </div>


     <div className = "d-flex justify-content-center">

        <p>{Email}</p>
      <p>{Address}</p>
     
     
     </div>

     <h6>Description</h6>
     </div>
   )
 }
 
 export default FinalCV