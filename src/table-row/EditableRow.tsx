interface value {
    contact: any;
    handleEditFormChange: (data: any) => void;
    hanlderEditForm: (value: boolean) => void;
}
function EditRow(props: value) {
    
    return(
        <tr>
            <td>
                <input
                type="text"
                required
                placeholder="Enter Id"
                name="id"
                value={props.contact.id}
                disabled
                ></input>
            </td>
            <td>
                <input
                type="number"
                name="userId"
                required
                placeholder="Enter UserId"
                value={props.contact.userId}
                disabled
                ></input>
            </td>
            <td>
                <input
                type="text"
                name="title"
                required
                placeholder="Enter Title"
                value={props.contact.title}
                onChange={(e) =>props.handleEditFormChange(e)}
                ></input>
            </td>
            <td>
                <input
                type="text"
                required
                name="body"
                placeholder="Enter Body"
                value={props.contact.body}
                onChange={(e) =>props.handleEditFormChange(e)}
                ></input>
            </td>
            <td>
                <button onClick={() => props.hanlderEditForm(true)}>Save</button>
                <button type="button" onClick={() => props.hanlderEditForm(false)}>
                    Cancel
                </button>
            </td>
        </tr>
    )
}

export default EditRow;