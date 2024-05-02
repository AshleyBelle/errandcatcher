import React, { useState, useEffect } from 'react';
import RequestModal from './props/RequestModal';
import Pagination from './props/Pagination';

function Request() {
    const [requests, setRequests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Simulate fetching data (you can replace this with actual API calls)
        const mockRequests = [
          {
            id: 1,
            userID: 101,
            username: "John Doe",
            accountType: "Regular",
            requestStatus: "Pending",
            images: ["image1.jpg", "image2.jpg"],
          },
          {
            id: 2,
            userID: 102,
            username: "Jane Smith",
            accountType: "Premium",
            requestStatus: "Approved",
            images: ["image3.jpg", "image4.jpg"],
          },
          // Add more mock requests here
        ];
        setRequests(mockRequests);
      }, []);

      //const totalPages = Math.ceil(requests.length / itemsPerPage);

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentRequests = requests.slice(indexOfFirstItem, indexOfLastItem);    

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const handleClick = (request) => {
        setSelectedRequest(request); // Set selected request
        setShowModal(true); // Show modal
      };
    
      const handleCloseModal = () => {
        setShowModal(false); // Hide modal
      };
    

  return (
    <div className="container">
    <h1 className="text-center my-4">Verification Requests</h1>
    <table className="table">
      <thead>
        <tr>
          <th style={{ ...tableHeaderStyle, width: "10%" }}>ID</th>
          <th style={{ ...tableHeaderStyle, width: "30%" }}>User</th>
          <th style={{ ...tableHeaderStyle, width: "20%" }}>Type</th>
          <th style={{ ...tableHeaderStyle, width: "20%" }}>Status</th>
          <th style={{ ...tableHeaderStyle, width: "30%" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request.id}>
            <td>{request.userID}</td>
            <td>{request.username}</td>
            <td>{request.accountType}</td>
            <td>{request.requestStatus}</td>
            <td>
              <button className="btn btn-primary mr-2" onClick={() => handleClick(request)}>
                View
              </button>
              {/* <button className="btn btn-primary" onClick={() => handleImageButtonClick(request.images)}>
                View Image
              </button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(requests.length / itemsPerPage)}
        onPageChange={handlePageChange}
    />
    {showModal && (
      <RequestModal
        request={selectedRequest}
        handleClose={handleCloseModal}
      />
    )}
    {/* {showImageModal && (
      <RequestImages
        request={selectedImages}
        handleClose={handleCloseImageModal}
      />
    )} */}
  </div>
  )
}
const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: "10px",
  textAlign: "left",
  fontSize: "12px",
};

const tableCellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  fontSize: "12px",
};

const tableRowStyle = {
  ":hover": {
    backgroundColor: "#f2f2f2",
  },
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "8px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "12px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "5px",
};


export default Request;
