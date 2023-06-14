
import './App.css';
import Navbar from './components/Navbar'
import PersonalD from './components/PersonalD'
import Experience from './components/Experience'
import FinalCV from './components/FinalCV';
import { useState } from 'react'




function App() {

 
  const [Exp, setExp] = useState(
    {Position: "", Company: "", City: "", From: "", To: ""}
  
  )
  
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
<div className="col-6">
   <PersonalD />
  

   <Experience 
  handleChange = {handleChange}

  /> 


  </div>
  <div className="col-6">

<FinalCV />

    </div>
  </div>

  
    
  </div>
   </div>  


  );
}

export default App;
