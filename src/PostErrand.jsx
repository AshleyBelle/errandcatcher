import React, { useState } from 'react';
import Modal from "@mui/joy/Modal";
import ErrandInputs from './props/ErrandInputs';
import ModalClose from "@mui/joy/ModalClose";

const PostErrand = ({ open, onClose }) => {
  const [showModal, setShowModal] = useState(open);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose(); 
  };

  const handlePostCommission = async () => {
    console.log("Simulating posting commission...");

    try {
      const response = await fetch('/api/post-errand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Form data here */ }),
      });

      if (response.ok) {
        setShowModal(false); // Close modal
        console.log("Errand posted successfully!");
      } else {
        console.error("Error posting errand:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting errand:", error);
    }
  };

  return (
    <Modal
      open={showModal} 
      onClose={handleCloseModal} 
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="modal-dialog-centered"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)' /* Semi-transparent black background */,
      }}
    >
      <div className="modal-content" style={{
        backgroundColor: 'white', /* White background for the modal */
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        // width: '90%',
        maxWidth: '1200px',
        margin: 'auto',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <h2 id="modal-title">Post Commission</h2>
        <ModalClose/>
        <ErrandInputs
          handleChange={() => {}}
          variant="soft"
          title="comTitle"
          start="comStart"
          deadline="comDeadline"
          location="comLocation"
          to="comTo"
          type="comType"
          typeValue=""
          desc="comDescription"
          pay="comPay"
          number="Contactno"
          mapContainer={null}
          long=""
          lat=""
          destlong=""
          destlat=""
          distance=""
        />
        <div className="btn-container">
          <button onClick={handlePostCommission} className="btn btn-yellow">
            POST
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PostErrand;
