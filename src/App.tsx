import React, { useState,Fragment, useEffect  } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadRow from './table-row/ReadableRow';
import EditRow from './table-row/EditableRow';
import data from "./mock-data.json";
import { createRequest, deleteRequest, editRequest, readRequest } from './request.service';
function App() {
  const [tableData, setTableData] = useState([]);

  const [editById,setEditById] = useState(0);

  const [editForm, setEditForm] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });

  const [addForm,setAddForm] = useState({
    userId: "",
    title: "",
    body: "",
  })

  const editableHandler =(data: any) => {
    setEditById(data.id);
    setEditForm(data)
  }

  const handleEditFormChange = (event: any) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value
    })
  }

  const onClickHandlerEditForm = async (value: boolean) => {
    if(value) {
    const response = await editRequest(editForm);
    console.log(response);
    setTableData(response);
    }
    setEditById(0)
   
    
  }

  const handleAddFormChange = (event: any) => {
    setAddForm({
      ...addForm,
      [event.target.name]: event.target.value
    })
  }

  const addSubmitHandler = async()=> {
    const response = await createRequest(addForm);
    setTableData(response);
    setEditById(0)
    
    if(response) setAddForm({ userId: "", title: "", body: "" })
  } 

  const readData = async () => {
   const response =  await readRequest()
   
   setTableData(response);
  }
  useEffect(() => {
    readData()
  },[])
  const deleteHandler = async (id: string | number) => {
    const response = await deleteRequest(id);
    setTableData(response);
  }
  return (
    <div className="App">
      <h2>Add a Details</h2>
      <div style={{ marginBottom: "7px" }}>
        <input
          type="text"
          name="userId"
          required
          value={addForm.userId}
          placeholder="Enter a User ID"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="title"
          value={addForm.title}
          placeholder="Enter an Tittle"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="body"
          value={addForm.body}
          placeholder="Enter a Body"
          onChange={handleAddFormChange}
        />
        <button onClick={() => addSubmitHandler()}>Add</button>
      </div>
      <header className="App-header">
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>USERID</th>
          <th>TITLE</th>
          <th>BODY</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
      {tableData?.length> 0 ? tableData?.length && tableData.map((contact: any,index) => (
          <Fragment key={index}>
            {
              editById === contact.id ?
              <EditRow 
                contact = {editForm} 
                handleEditFormChange = {handleEditFormChange}
                hanlderEditForm = {onClickHandlerEditForm}
                />
            :
            <ReadRow
              contact={contact}
              editableHandler = {editableHandler}
              deleteHandler = {deleteHandler}
            />
          }
          </Fragment>
        )): ''}
      </tbody>
    </table>
      </header>
    </div>
  );
}

export default App;
