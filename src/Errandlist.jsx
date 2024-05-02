import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Table from './props/Table';
import Pagination from './props/Pagination';
import PostErrand from './PostErrand'; // Import the PostErrand component

const Errandlist = () => {
    const [commissions] = useState([
        {
          commissionID: 1,
          commissionTitle: "Buy groceries",
          userFirstname: "John",
          userLastname: "Doe",
          commissionType: "Home",
          commissionPay: "$50",
          DatePosted: "2024-04-25",
          DateCompleted: "",
          commissionStatus: "Pending",
        },
        {
          commissionID: 2,
          commissionTitle: "Pick up dry cleaning",
          userFirstname: "Jane",
          userLastname: "Smith",
          commissionType: "Delivery",
          commissionPay: "$30",
          DatePosted: "2024-04-27",
          DateCompleted: "2024-04-28",
          commissionStatus: "Completed",
        },
    ]);

    const [searchTerm, setSearchTerm] = useState({
        term: "",
        type: "",
        status: "",
    });

    const handleChange = (e) => {
        setSearchTerm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const filterErrands = commissions.filter((commission) => {
        const type = commission.commissionType
            .toLowerCase()
            .includes(searchTerm.type.toLowerCase());
        const termMatch = commission.commissionTitle
            .toLowerCase()
            .includes(searchTerm.term.toLowerCase());
        const termMatch2 = commission.userFirstname
            .toLowerCase()
            .includes(searchTerm.term.toLowerCase());
        const termMatch3 = commission.userLastname
            .toLowerCase()
            .includes(searchTerm.term.toLowerCase());
        const status = commission.commissionStatus.includes(searchTerm.status);

        return type && (termMatch || termMatch2 || termMatch3) && status;
    });

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const totalPages = Math.ceil(filterErrands.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterErrands.slice(indexOfFirstItem, indexOfLastItem);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="commissions">
                <h1 className="header" style={{color:"Black", fontFamily:"sans-serif", margin:"20px"}}>Errand List</h1>
                <div className="search-filter-container" style={{display: "flex", marginLeft:"20px"}}>
                    <input
                        type="text"
                        name="term"
                        placeholder="Search..."
                        value={searchTerm.term}
                        onChange={handleChange}
                        style={{marginRight: "10px", marginBottom:"20px", width: "100%", maxWidth: "300px"}}
                    />
                    <div className="filter" style={{display: "flex"}}>
                        <select
                            className="CLstatus"
                            onChange={handleChange}
                            value={searchTerm.status}
                            name="status"
                            style={{marginRight:"10px", height:"28px"}} 
                        >
                            <option value="">Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Expired">Expired</option>
                            <option value="Caught">Caught</option>
                        </select>
                        <select
                            className="CLtype"
                            onChange={handleChange}
                            value={searchTerm.type}
                            name="type"
                            style={{marginRight: "10px", height:"28px"}}
                        >
                            <option value="">Type</option>
                            <option value="Home">Home</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Delivery">Delivery</option>
                        </select>

                        {/* Button to open the Post Errand modal */}
                        <button className="btn btn-primary" onClick={openModal} style={{ height: "30px", display: "flex", alignItems: "center" }}>
                            <i className='bi bi-plus-circle' style={{ fontSize: "14px", marginRight: "5px" }}></i>
                            Post Errand
                        </button>
                    </div>
                </div>

                <Table
                    headers={[
                        "ID",
                        "Title",
                        "Employer",
                        "Type",
                        "Payment",
                        "Posted",
                        "Completed",
                        "Status",
                        "Action",
                    ]}
                    data={currentItems.map((Commission) => [
                        Commission.commissionID,
                        Commission.commissionTitle,
                        `${Commission.userFirstname} ${Commission.userLastname}`,
                        Commission.commissionType,
                        Commission.commissionPay,
                        new Date(Commission.DatePosted).toLocaleDateString(),
                        Commission.DateCompleted
                            ? new Date(Commission.DateCompleted).toLocaleDateString()
                            : "",
                        Commission.commissionStatus,
                        <button type="button" className="btn btn-warning ">
                            <Link to={`/errand/view-errand/${Commission.commissionID}`}>
                                <i className='bi bi-eye' style={{ color: "black" }}></i>
                            </Link>
                        </button>,
                    ])}
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
            
            {/* Render the PostErrand component if showModal is true */}
            {showModal && <PostErrand open={showModal} onClose={closeModal} />}
        </div>
    );
}

export default Errandlist;
