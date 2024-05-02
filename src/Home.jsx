import React from 'react'
//                      

function Home({Toggle}) {

  return (
    <div className='p-3 bg-light'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-item-center bg-white  border border-secondary shadow-sm'>
                        <i className='bi bi-currency-dollar fs-1'></i>
                            <div>
                                <span>Sales</span>
                                <h2>234</h2>
                            </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-item-center bg-white  border border-secondary shadow-sm'>
                        <i className='bi bi-currency-dollar fs-1'></i>
                            <div>
                                <span>Sales</span>
                                <h2>234</h2>
                            </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-item-center bg-white  border border-secondary shadow-sm'>
                        <i className='bi bi-currency-dollar fs-1'></i>
                            <div>
                                <span>Sales</span>
                                <h2>234</h2>
                            </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-between p-4 align-item-center bg-white  border border-secondary shadow-sm'>
                        <i className='bi bi-currency-dollar fs-1'></i>
                            <div>
                                <span>Sales</span>
                                <h2>234</h2>
                            </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4 p-3'>
                    {/* <PieChart/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

// import React from 'react'
// import Nav from './Nav'
// import {ReactComponent as BiCart} from './icons/bootstrap-icons-1.11.3/cart.svg'
// import Table from './props/Table';
// import AccountList from './Accountlist';

// function Home({Toggle}) {

//   return (
//     <div className='px-3'>
//         <Nav Toggle={Toggle}/>
//         <div className='container-fluid' >
//             <div className='row g-3 my-2'>
//                 <div className='col-md-3 p-1'>
//                     <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
//                         <div>
//                             <h3 className='fs-2'>230</h3>
//                             <p className='fs-5'>Request</p>
//                         </div>
//                         <BiCart className='bi bi-cart p-3 fs-1' style={{ width: '30px', height: '30px' }}/>
//                     </div>
//                 </div>
//                 <div className='col-md-3 p-1'>
//                     <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
//                         <div>
//                             <h3 className='fs-2'>2450</h3>
//                             <p className='fs-5'>Errands</p>
//                         </div>
//                         <BiCart className='bi bi-dollar p-3 fs-1' style={{ width: '30px', height: '30px' }}/>
//                     </div>
//                 </div>
//                 <div className='col-md-3 p-1'>
//                     <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
//                         <div>
//                             <h3 className='fs-2'>2230</h3>
//                             <p className='fs-5'>Users</p>
//                         </div>
//                         <i className='bi bi-truck p-3 fs-1'></i>
//                     </div>
//                 </div>
//                 <div className='col-md-3 p-1'>
//                     <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
//                         <div>
//                             <h3 className='fs-2'>23</h3>
//                             <p className='fs-5'>Payment</p>
//                         </div>
//                         <i className='bi bi-graph p-3 fs-1'></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div>
        
//         <AccountList/>
//       </div>
  
//     </div>
//   )
// }

// export default Home