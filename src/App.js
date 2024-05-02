import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
//import SideNavBar from './SideNavBar/SideNavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import Sidebar from './Sidebar';
import Nav from './Nav';
import Home from './Home';
import User from './Accountlist';
import Errands from './Errandlist';
import Request from './Request';
import Post from './PostErrand'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PostErrand from './PostErrand';


function App() {
  const [toggle, setToggle] = useState(false);
  function Toggle(){
    setToggle(!toggle);
  }

  useEffect(()=>{
    const handleSize = () => {
      if(window.innerWidth > 768){
        setToggle(false);
      }
      window.addEventListener('resize', handleSize);

      return() => {
        window.removeEventListener('resize', handleSize);
      }
    }
  }, [])

  return (
    <BrowserRouter>
    <div className="d-flex">
      <div className={toggle ? "d-none" : "w-auto position-fixed"}>
        <Sidebar/>
      </div>
      <div className={toggle ? "d-none" : "invisible"}>
        <Sidebar/>
      </div>
      <div className='col oveflow-auto'>
        <Nav Toggle={Toggle}/>
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/users' element={<User/>}></Route>
            <Route path='/errands' element={<Errands/>}></Route>
            <Route path='/request' element={<Request/>}></Route>
            <Route path='/post' element Component={PostErrand}></Route>
          </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   const [toggle, setToggle] = useState(true)
//   const Toggle = () => {
//     setToggle(!toggle)
//   }

//   return (
//     <div className="container-fluid bg-secondary min-vh-100">
//       {/* <SideNavBar/> */}
//       <div className='row'>
//         {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
//         <Sidebar/>
//         {/* <SideNavBar/> */}
//         </div>}
//         {toggle && <div className='col-4 col-md-2'></div>}
//         <div className='col'>
//           <Home Toggle={Toggle} />
//         </div>
//       </div>
      
//     </div>
//   );
// }
