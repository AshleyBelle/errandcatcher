import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Chip from '@mui/joy/Chip';
import Avatar from '@mui/material/Avatar';

const UserModal = ({ open, onClose, layout, currentId, currentUser }) => {

    const NumberCircle = ({ number }) => (
        <Avatar
          sx={{
            width: 24,
            height: 24,
            backgroundColor: '#3f51b5', // Change the background color of the circle
            color: '#fff', // Change the color of the number
            fontSize: '12px', // Adjust the font size of the number
            borderRadius: '50%', // Ensure the avatar is circular
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {number}
        </Avatar>
      );
    
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalDialog layout={layout} className="custom-dialog">
        <ModalClose />
        <DialogTitle> PROFILE</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "row-reverse", padding:"20px" }}>
          <div style={{ fontSize: "12px", display: "flex", alignItems: "center" }}>
            <h4 style={{ fontSize: "12px" }}>USER: {currentId}</h4>
            <img src="..." className="rounded float-left" alt="..." style={{ marginRight: '20px', width: '250px', height: '250px' }}></img>
            <h5 style={{ fontSize: "14px" }}>
              <b>USERNAME: </b>
              {/* {currentUser.username}<br /> */}
              <br /> 
              <b>FULL NAME: </b>
              {/* {`${currentUser.userFirstname} ${currentUser.userLastname}`}<br/> */}
              <br /> 
              <b>EMAIL: </b>
              {/* {currentUser.userEmail}<br /> */}
              <br />
              <b>GENDER: </b>
                  {/* {account.gender}*/}
                <br /> 
              <b>CONTACT #: </b>
                  {/* {account.contact} <br /> */}
                  <br /> 
              <b>AGE: </b>
                  {/* {account.age} <br /> */}
                  <br /> 
              <b>BIRTHDAY: </b>
                  {/* {account.bday} <br /> */}
                  <br /> 
              <b>ADDRESS: </b>
                  {/* {account.address} <br /> */}
                  <br /> 
              <b>DESCRIPTION: </b>
                  {/* {account.desc} <br /> */}
                  <br /> 
              <b>ACCOUNT TYPE: </b>
              {/* {currentUser.accountType}<br /> */}
              <br />
              <b>DATE CREATED: </b>
              {/* {currentUser.dateCreated}<br /> */}
              <br />
              <b>ACCOUNT STATUS: </b>
              {/* {currentUser.accountStatus}<br /> */}
              <br /> 
              <b>RATING: </b>
                  {/* {rating} <br /> */}
                  <br /> 
                  <Chip     
                    variant="outlined"
                    color="neutral"
                    size="lg"
                    startIcon={<NumberCircle number={3} />}
                    >Posted Errands</Chip>
                    <br/>
                  <Chip
                    variant="outlined"
                    color="neutral"
                    size="lg"
                    startIcon={<NumberCircle number={3} />}>
                    Applied Errands</Chip>

            </h5>
          </div>
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
};

export default UserModal;
