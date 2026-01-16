function ContactForm({
  contactName,
  num,
  setName,
  setNumber,
  addContacts,
  isEditing

}

) {
    return(
        <div>
        <input value={contactName}
        onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' />
       <input value={num}
       onChange={(e)=>setNumber(e.target.value)}
        type="text" placeholder='Phone'/>
        <button onClick={addContacts} >{isEditing?"save":"Add"}</button>
        </div>
    )
    
}
export default ContactForm; 