 import React from 'react'

 
 function FinalCV({FirstName, LastName, Address, Email, Description,Position, Company, City, From, To}) {
   return (
    <div>
     <div className= "d-flex justify-content-center pt-3">
      <h4> {FirstName} {LastName} </h4>
     
     
     </div>


     <div className = "d-flex justify-content-center ">

        <p>{Email}</p>
      
     </div>

<div className= "d-flex  justify-content-center ">
<p>{Address}</p>
</div>
 
 
     <h6>About me:</h6>
  <div> {Description} </div>


  <h6 className="mt-5">Experience:</h6>

<div className="d-flex flex-column">
  <div>{Company}: {City} </div>
  
  <div>- {Position}</div>
  <div> {From} - {To}</div>
  </div>
     </div>

     
   )
 }
 
 export default FinalCV