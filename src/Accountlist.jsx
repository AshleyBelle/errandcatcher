import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./props/Table";
import { ReactComponent as BiView } from './icons/bootstrap-icons-1.11.3/eye-fill.svg';
import {ReactComponent as BiEdit} from './icons/bootstrap-icons-1.11.3/pencil-square.svg';
import {ReactComponent as BiDelete} from './icons/bootstrap-icons-1.11.3/trash-fill.svg';
import Pagination from './props/Pagination';
import {ReactComponent as BiReceipt} from './icons/bootstrap-icons-1.11.3/receipt.svg';
import Invoice from "./props/Invoice";
import UserModal from "./props/UserModal";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";


const AccountList = () => {
    const [layout, setLayout] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState(null);

    const mockAccounts = [
        {
          userID: 1,
          username: "john_doe",
          userFirstname: "John",
          userLastname: "Doe",
          userEmail: "john@example.com",
          accountType: "Employer",
          dateCreated: "2022-04-25",
          accountStatus: "Verified",
        },
        {
            userID: 2,
            username: "jane_smith",
            userFirstname: "Jane",
            userLastname: "Smith",
            userEmail: "jane@example.com",
            accountType: "Catcher",
            dateCreated: "2022-04-26",
            accountStatus: "Unverified",
          },
          {
            userID: 3,
            username: "admin1",
            userFirstname: "Admin",
            userLastname: "One",
            userEmail: "admin1@example.com",
            accountType: "Admin",
            dateCreated: "2022-04-27",
            accountStatus: "Suspended",
          },
          {
            userID: 4,
            username: "admin1",
            userFirstname: "Admin",
            userLastname: "One",
            userEmail: "admin1@example.com",
            accountType: "Admin",
            dateCreated: "2022-04-27",
            accountStatus: "Suspended",
          },
          {
            userID: 5,
            username: "admin1",
            userFirstname: "Admin",
            userLastname: "One",
            userEmail: "admin1@example.com",
            accountType: "Admin",
            dateCreated: "2022-04-27",
            accountStatus: "Suspended",
          },
    ];

    const [accounts, setAccounts] = useState(mockAccounts);
    const [searchTerm, setSearchTerm] = useState({
        term: "",
        type: "",
        status: "",
    });

    const handleChange = (e) => {
        if (e.target.name === "status") {
            setSearchTerm((prev) => ({ ...prev, status: e.target.value }));
        } else if (e.target.name === "type") {
            setSearchTerm((prev) => ({ ...prev, type: e.target.value }));
        } else {
            setSearchTerm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    const filterAccounts = accounts.filter((account) => {
        const type = account.accountType
            .toLowerCase()
            .includes(searchTerm.type.toLowerCase());
        const termMatch = account.username
            .toLowerCase()
            .includes(searchTerm.term.toLowerCase());
        const termMatch2 = account.userEmail
            .toLowerCase()
            .includes(searchTerm.term.toLowerCase());
        const status = account.accountStatus.includes(searchTerm.status);

        return type && (termMatch || termMatch2) && status;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPages = Math.ceil(filterAccounts.length / itemsPerPage);
    const paginatedAccounts = filterAccounts.slice(indexOfFirstItem, indexOfLastItem);


    const headers = [
        "ID",
        "Username",
        "Name",
        "Email",
        "Type",
        "Date Created",
        "Status",
        "Actions",
    ];

    const accountData = paginatedAccounts.map((account) => [
        account.userID,
        account.username,
        `${account.userFirstname} ${account.userLastname}`,
        account.userEmail,
        account.accountType,
        account.dateCreated,
        account.accountStatus,
        <div>
            <Dropdown>
                    <MenuButton>ACTIONS</MenuButton>
                    <Menu>
                    <MenuItem onClick={() => handleView(account.userID)}>View</MenuItem>
                    <MenuItem onClick={() => onSuspend(account.userID)}>Suspend</MenuItem>
                    <MenuItem onClick={() => onDeactivate(account.userID)}>Deactivate</MenuItem>
                    <MenuItem onClick={() => onReactivate(account.userID)}>Reactivate</MenuItem>
                    <MenuItem onClick={() => handleInvoice(account.userID)}>Invoice</MenuItem>
                    </Menu>
                </Dropdown>
        </div>,
    ]);
    const getUserDetails = (userID) => {
        return mockAccounts.find(account => account.userID === userID);
    };

    const handleView = (userID) => {
        setCurrentId(userID);
        setLayout("view");
        setCurrentUser(getUserDetails(userID));
    };

    const handleInvoiceModalOpen = (invoiceId) => {
        // Fetch the invoice data based on invoiceId and set selectedInvoice state
        const invoice = fetchInvoiceData(invoiceId); // Implement this function to fetch invoice data
        setSelectedInvoice(invoice);
        setInvoiceModalOpen(true);
    };

    const handleInvoice = (userID) => {
        handleInvoiceModalOpen(userID);
    };

    const fetchInvoiceData = (invoiceId) => {
        return {
            id: invoiceId,
            date: "2024-04-25",
            amount: 100.0,
            method: "Credit Card"
        };
    }; 

    return (
        <div>
            <h1 className="header" style={{color:"Black", fontFamily:"sans-serif", margin:"20px"}}>Account List</h1>
            <div className="search" style={{margin:"20px"}}>
                <input
                    type="text"
                    name="term"
                    placeholder="Search..."
                    value={searchTerm.term}
                    onChange={handleChange}
                    style={{marginBottom:"20px", width: "100%", maxWidth: "300px"}}
                />
                <select
                    className="ALtype"
                    name="type"
                    onChange={handleChange}
                    value={searchTerm.type}
                    style={{marginLeft:"10px", width:"100px", height:"28px"}} 
                >
                    <option value="">Type</option>
                    <option value="Employer">Employer</option>
                    <option value="Catcher">Catcher</option>
                    <option value="admin">Admin</option>
                </select>
                <select
                    className="ALstatus"
                    name="status"
                    onChange={handleChange}
                    value={searchTerm.status}
                    style={{marginLeft:"10px",  width:"100px", height:"28px"}}
                >
                    <option value="">Status</option>
                    <option value="Verified">Verified</option>
                    <option value="Unverified">Unverified</option>
                    <option value="Suspended">Suspended</option>
                </select>
            </div>
            <div className="accounts">
                <Table headers={headers} data={accountData} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
            <UserModal
        open={!!layout}
        onClose={() => setLayout(null)}
        layout={layout}
        currentId={currentId}
        currentUser={currentUser}
      />
     <Invoice open={invoiceModalOpen} onClose={() => setInvoiceModalOpen(false)} invoice={selectedInvoice} />
        </div>
  );
};

export default AccountList;
