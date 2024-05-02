import React, {useState} from 'react';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [active, setActive] = useState(1);

    return (
        <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100'>
            <div>
                <div className='p-3 text-decoration-none text-white'>
                    <i className='bi bi-code-slash fs-5 me-4'></i>
                    <span className='fs-5'>Errand Catcher</span>
                </div>
                <hr className='text-white mt-2'/>
                <ul className='nav nav-pills flex-column mt-3'>
                    <li className={active ===1 ? 'active nav-item p-2 m-1' :'nav-item p-2'} 
                        onClick={e => setActive(1)}>
                        <Link to='/home' className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-house me-3 fs-5'/>
                            <span className='fs-5'>Home</span>
                        </Link>
                    </li>
                    <li className={active ===2 ? 'active nav-item p-2 m-1' :'nav-item p-2'} 
                        onClick={e => setActive(2)}>
                        <Link to='/request' className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-grid me-3 fs-5'/>
                            <span className='fs-5'>Request</span>
                        </Link>
                    </li>
                    <li className={active ===3 ? 'active nav-item p-2 m-1' :'nav-item p-2'} 
                        onClick={e => setActive(3)}>
                        <Link to='/users' className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-people fs-5 me-3 fs-5'/>
                            <span className='fs-5'>Users</span>
                        </Link>
                    </li>
                    <li className={active ===4 ? 'active nav-item p-2 m-1' :'nav-item p-2'} 
                        onClick={e => setActive(4)}>
                        <Link to='/errands' className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-table me-3 fs-5'/>
                            <span className='fs-5'>Errands</span>
                        </Link>
                    </li>

                    <li className={active ===5 ? 'active nav-item p-2 m-1' :'nav-item p-2'} 
                        onClick={e => setActive(5)}>
                        <Link to='/reports' className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-map me-3 fs-5'/>
                            <span className='fs-5'>Maps</span>
                        </Link>
                    </li>
                    <li className={active ===6 ? 'active nav-item p-2 m-1' :'nav-item p-2'} 
                        onClick={e => setActive(6)}>
                        <Link to='/reports' className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-chat-fill me-3 fs-5'/>
                            <span className='fs-5'>Chat</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <hr className='text-white'/>
                <div className='nav-item p-2'>
                    <span href='' className='p-1 text-decoration-none'>
                        <i className='bi bi-person-circle me-3 fs-5'></i>
                        <span className='fs-5'>Logout</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;



// function Sidebar() {
//     const [isItem1Open, setIsItem1Open] = useState(false);
//     const [active, setActive] = useState(1);

//     const toggleItem1 = () => {
//         setIsItem1Open(!isItem1Open);
//     };

//     return (
//         <div className='bg-white sidebar p-2'>
//             <div className='m-2'>
//                 <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
//                 <span className='brand-name fs-4'>Admin</span>
//             </div>
//             <hr className='text-dark' />
//             <div className='list-group list-group-flush'>
//             <ul className='nav nav-pill flex-column mt-3'>
//                 <li className={active === 1 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(1)}>
//                     <span className='list-group-item py-2 my-1' href=''>
//                         <BiSpeedometer2 className='bi-speedometer2 fs-5 me-3' />
//                         <span>Dashboard</span>
//                     </span>
//                 </li>
//                 <li className={active === 1 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(1)}>
//                     <a className='list-group-item py-2' href=''>
//                         <BiHouse className='bi bi-house fs-5 me-3'/>
//                         <span>Home</span>
//                     </a>
//                 </li>
//                 <li className={active === 2 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(2)}> 
//                     <a className='list-group-item py-2' href=''>
//                         <BiTable className='bi bi-table fs-5 me-3'/>
//                         <span>Schedule</span>
//                     </a>
//                 </li>
//                 <li className={active === 3 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(3)}>
//                     <a className='list-group-item py-2' href=''>
//                         <BiClipboard className='bi bi-clipboard-data fs-5 me-3'/>
//                         <span>Products</span>
//                     </a>
//                 </li>
//                 <li className={active === 4 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(4)}>
//                     <a className='list-group-item py-2' href=''>
//                         <BiCustomer className='bi bi-people fs-5 me-3'/>
//                         <span>Users</span>
//                     </a>
//                 </li>
//                 <li className={active === 5 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(5)}>
//                     <a className='list-group-item py-2'>
//                         <BiLogout className='bi bi-power fs-5 me-3'/>
//                         <span>Logout</span>
//                     </a>
//                 </li>

//             </ul>
//                 {/* <a className='list-group-item py-2' onClick={toggleItem1}>
//                     <BiLogout className='bi bi-power fs-5 me-3'/>
//                     <span></span>
//                 </a> */}
//                 {/* <ul className={`list-group-item collapse py-2 ${isItem1Open ? 'show' : ''}`}>
//                     <li className='list-group-item'>
//                         <a className='nav-link'>Item 1</a>
//                     </li>
//                     <li className='list-group-item'>
//                         <a className='nav-link'>Item 1</a>
//                     </li>
//                 </ul> */}
//             </div>
//         </div>
//     );
// }
