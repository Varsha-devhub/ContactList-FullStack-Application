function ContactList({
contacts,deleteContacts,startEdit
}
){
    return(
        <div>
           <ul>
            {contacts.map((contact)=>{
                return <li key={contact._id}>
                    {contact.name}-{contact.phone}
                    <button  onClick={()=>startEdit(contact)}>Edit</button>
                    <button onClick={()=>deleteContacts(contact._id)}>x</button>
                </li>
            })}
            </ul> 

        </div>
    )
}
export default ContactList;