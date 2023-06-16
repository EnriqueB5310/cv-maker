
import './App.css';
import Navbar from './components/Navbar'
import PersonalD from './components/PersonalD'
import Experience from './components/Experience'
import FinalCV from './components/FinalCV';
import { useState } from 'react'




function App() {

 
  const [Exp, setExp] = useState(
    {FirstName: "", LastName: "", Address: "", Email: "", Description: "", Position: "", Company: "", City: "", From: "", To: "",}
  
  )

  const [count, setCount] = useState(0)




  
  function handleChange(event) {
    setExp(prevExp => {
        
        return {
            ...prevExp,
            [event.target.name]: event.target.value
        }
  
    })
  }
 
console.log(Exp)



  return (

    <div>
   <Navbar />
   
   <div className='container-fluid bg-light'>
<div className="row">
<div className="col-4">
   
   <PersonalD 
   handleChange= {handleChange}
   />
  

   <Experience 
  handleChange = {handleChange}
  /> 
<button  onClick={() => setCount(count +1)}>Add Exp</button> 
  <button onClick={() => setCount(count - 1)}>Delete Exp</button>
  { [...Array(count)].map((t,i) => <Experience handleChange={handleChange} />)} {/* adds compent */}
  
  </div>
  <div className="col-6">

<FinalCV
FirstName = {Exp.FirstName}
LastName = {Exp.LastName}
Address = {Exp.Address}
Email = {Exp.Email}
Description = {Exp.Description}
Company = {Exp.Company}
Position = {Exp.Position}
City = {Exp.City}
From = {Exp.From}
To = {Exp.To}

/>

    </div>
  </div> 
 

  </div>



   </div>  


  );
}

export default App;
