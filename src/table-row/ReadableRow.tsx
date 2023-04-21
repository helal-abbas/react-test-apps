export interface ValuesProps{
    contact: any;
    editableHandler: (id: any) => void
}

function ReadRow(props: ValuesProps) {
    
    return(
        <tr>
            <td>{props.contact.id}</td>
            <td>{props.contact.userId}</td>
            <td>{props.contact.title}</td>
            <td>{props.contact.body}</td>
            <td>
                <button onClick={() => props.editableHandler(props.contact)}>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default ReadRow;