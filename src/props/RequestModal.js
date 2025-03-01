import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";

const RequestModal = ({ request, handleClose }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleVerify = async (requestUserID, requestID) => {
    // Simulate the behavior of verifying the request
    console.log("Request verified:", request);
    setIsButtonClicked(true);
  };

  const handleUnverify = async (requestUserID, requestID) => {
    // Simulate the behavior of unverifying the request
    console.log("Request unverified:", request);
    setIsButtonClicked(true);
  };

  const formattedDate = (theDate) => {
    const date = new Date(theDate);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]; // Get the month and year from the date object
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Construct the formatted date string
    return `${month} ${date.getDate()}, ${year}`;
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <span className="close" onClick={handleClose} style={closeStyle}>
          <ModalClose/>
        </span>
        <h2 style={{ margin: "20px" }}>Verification Request Details</h2>
        <p>
          <strong>Full Name:</strong> {request.userFirstname}{" "}
          {request.userLastname}
        </p>
        <p>
          <strong>Gender:</strong> {request.userGender}
        </p>
        <p>
          <strong>Age:</strong> {request.userAge}
        </p>
        <p>
          <strong>Birthdate:</strong> {formattedDate(request.userBirthday)}
        </p>
        <p>
          <strong>Address:</strong> {request.userAddress}
        </p>
        <p>
          <strong>Contact Number:</strong> {request.contactNumber}
        </p>
        <p>
          <strong>Email Address:</strong> {request.userEmail}
        </p>
        {/* {request.images && (
          <div>
            <h3>Images</h3>
            {request.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        )} */}
        <div>
          <button type="button" class="btn btn-success"
            onClick={(e) =>
              handleVerify(request.requestUserID, request.requestID)
            }
            style={Veributton}
          >
            Verify
          </button>
          <button type="button" class="btn btn-danger"
            onClick={(e) =>
              handleUnverify(request.requestUserID, request.requestID)
            }
            style={Veributton}
          >
            Suspend
          </button>
        </div>
      </div>
    </div>
  );
};

const Veributton = {
  width: "100px",
  height: "40px",
  borderRadius: "10px",

  margin: "20px",
  gap: "20px",
  cursor: "pointer",
};

Veributton[":hover"] = {
  backgroundColor: "#4CAF50",
  color: "white",
};

Veributton[":active"] = {
  backgroundColor: "#45a049",
  color: "white",
};

const modalStyle = {
  display: "block",
  position: "fixed",
  zIndex: "1000",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)",
};

const modalContentStyle = {
  backgroundColor: "#fefefe",
  margin: "15% auto",
  padding: "20px",
  border: "1px solid #888",
  width: "80%",
  maxWidth: "500px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
};

const closeStyle = {
  color: "#aaa",
  float: "right",
  fontSize: "28px",
  fontWeight: "bold",
};

export default RequestModal;
