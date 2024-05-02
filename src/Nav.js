import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

function Nav({Toggle}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container-fluid'>
          <a class="navbar-brand d-none d-md-block" href="#">Nav</a>
          <a className='navbar-brand d-block d-md-none' onClick={Toggle}>
            <i className='bi bi-justify'></i>
          </a>

          <button className="btn btn-outline-light d-none d-md-inline-block border-0 bg-transparent" onClick={Toggle}>
            <i className='bi bi-justify'></i>
          </button>


          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
            <li class="nav-item border rounded">
              <a class="nav-link text-white" aria-current="page" href="">
                <i className='bi bi-search'></i> Search
              </a>
            </li>
            <li className='notify'>
               <i className="bi bi-bell" style={{ color: "#fff" }} />
           </li>
            <li class="nav-item dropdown mx-2 rounded border">
              <a class="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                aria-haspopup="true" 
                aria-expanded="false"
                aria-current="page" 
                href="">Account</a>
                 <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Setting</a>
                    <a className="dropdown-item" href="#">Logout</a>
                 </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

// import React from 'react';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/collapse';
// import { ReactComponent as Bijustifyleft } from './icons/bootstrap-icons-1.11.3/justify-left.svg';
// import { ReactComponent as BiJustify } from './icons/bootstrap-icons-1.11.3/justify.svg';
// import { ReactComponent as BiNotify } from './icons/bootstrap-icons-1.11.3/bell.svg';
// import { ReactComponent as BiSearch } from './icons/bootstrap-icons-1.11.3/search.svg';

// function Nav({ Toggle }) {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-transparent px-3">
//       <Bijustifyleft className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle} style={{ width: '30px', height: '30px' }} />
//       <button
//         className="navbar-toggler d-lg-none"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#collapsibleNavId"
//         aria-controls="collapsibleNavId"
//         aria-expanded="false"
//         aria-label="Toggle navigation">
//         <i className='bi bi-justify' />
//       </button>
//       <div className="collapse navbar-collapse" id="collapsibleNavId">
//         {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit"><BiSearch /></button>
//             </form>
//           </li>
//         </ul> */}

//         <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
//           <li className='notify'>
//           <BiNotify className="icon" style={{ color: "#fff", marginRight: '20px', marginTop: '15px' }} />
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="dropdownId"
//               data-bs-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//               style={{ color: "white" }}
//             >
//               Admin
//             </a>
//             <div className="dropdown-menu" aria-labelledby="dropdownId">
//               <a className="dropdown-item" href="#">Profile</a>
//               <a className="dropdown-item" href="#">Setting</a>
//               <a className="dropdown-item" href="#">Logout</a>
//             </div>
//           </li>
//         </ul>
//       </div>

//     </nav>
//   );
// }

// export default Nav;

