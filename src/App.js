
import './App.css';
import Navbar from './components/Navbar'
import PersonalD from './components/PersonalD'
import Experience from './components/Experience'
import FinalCV from './components/FinalCV';
function App() {
  return (

    <div>
   <Navbar />
   
   <div className='container-fluid bg-light'>
<div className="row">
<div className="col-6">
   <PersonalD />
  <Experience />


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
