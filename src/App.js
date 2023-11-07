import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    rowNumber: "",
    fullName: "",
    Location: "",
    CGPA: "",
  });

  const [editFormData, setEditFormData] = useState({
    rowNumber: "",
    fullName: "",
    Location: "",
    CGPA: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleAddFormChange = (event) => {
    // ... (unchanged)
  };

  const handleEditFormChange = (event) => {
    // ... (unchanged)
  };

  const handleAddFormSubmit = (event) => {
    // ... (unchanged)
  };

  const handleEditFormSubmit = (event) => {
    // ... (unchanged)
  };

  const handleEditClick = (event, contact) => {
    // ... (unchanged)
  };

  const handleCancelClick = () => {
    // ... (unchanged)
  };

  const handleDeleteClick = (contactId) => {
    // ... (unchanged)
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedContacts = [...contacts];

  if (sortConfig.key) {
    sortedContacts.sort((a, b) => {
      let comparison = 0;
      if (a[sortConfig.key] > b[sortConfig.key]) {
        comparison = 1;
      } else if (a[sortConfig.key] < b[sortConfig.key]) {
        comparison = -1;
      }
      return sortConfig.direction === "descending" ? comparison * -1 : comparison;
    });
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("rowNumber")}>
              Row Number
              <>
                <span style={{ marginRight: "4px" }}>↑</span>
                <span style={{ marginRight: "4px" }}>↓</span>
              </>
            </th>
            <th onClick={() => handleSort("fullName")}>
              Name
              <>
                <span style={{ marginRight: "4px" }}>↑</span>
                <span style={{ marginRight: "4px" }}>↓</span>
              </>
            </th>
            <th onClick={() => handleSort("location")}>
              Location
              <>
                <span style={{ marginRight: "4px" }}>↑</span>
                <span style={{ marginRight: "4px" }}>↓</span>
              </>
            </th>
            <th onClick={() => handleSort("CGPA")}>
              CGPA
              <>
                <span style={{ marginRight: "4px" }}>↑</span>
                <span style={{ marginRight: "4px" }}>↓</span>
              </>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact) => (
            <Fragment key={contact.id}>
              {editContactId === contact.id ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="rowNumber"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="location"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="CGPA"
          name="CGPA"
          required="required"
          placeholder="Enter an CGPA..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;

