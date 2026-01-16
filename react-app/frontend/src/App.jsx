import { useState,useEffect } from 'react'
import "./App.css";
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
function App() {
  const [contactName, setName] = useState("");
  const[num,setNumber]=useState("");
  const [contacts,setContacts]=useState([]);
  const [editId,setEditId]=useState(null);
  const [editName,setEditName]=useState("");
  const [editPhone,setEditPhone]=useState("");
  async function addContacts() {
    try{
      const res=await
      fetch("http://localhost:3000/contacts",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:contactName,
          phone:num
        })
     
      })
      const data=await res.json();
      console.log(data);
      if(!res.ok){
        throw new Error("Post failed");
      }
      setContacts([...contacts,data]);
      setName("");
      setNumber("");

    }catch(err){
      console.log(err);
    }
  }
  function startEdit(contacts) {
    setEditId(contacts._id);
    setEditName(contacts.name);
    setEditPhone(contacts.phone);
  }
  async function editContacts(id) {
    try{
       const res=await
    fetch(`http://localhost:3000/contacts/${id}`,{
      method:"PUT",
      headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:editName,
      phone:editPhone
    })
    })
    if(!res.ok){
      throw new Error("update failed");
    }
   setContacts((prev)=>{
      return prev.map((contact)=>{
        return contact._id===id?
        {...contact,name:editName,phone:editPhone}:contact
      })
    })
    setEditId(null);
    setEditName("");
    setEditPhone("");
    }catch(err){
      console.log(err);
    }
   
  }

async function deleteContacts(id) {
  try{
const res=await
fetch(`http://localhost:3000/contacts/${id}`,{
  method:"DELETE"
});
if(!res.ok){
  throw new Error("Delete failed")
}
  setContacts((prev)=>{
    return prev.filter((contact)=>{
      return contact._id!==id 
    })
  })
  }catch(err){
    console.log(err);
  }
}
useEffect(()=>{
  async function fetchContact() {
    try{
    const res=await
    fetch("http://localhost:3000/contacts")
    const data=await res.json();
    console.log(data);
    setContacts(data);
  }catch(err){
    console.log(err);
  }
  }
  fetchContact();
},[])
const isEditing=editId!==null; 
  return (
    <>
      <div className='container'>
        <h1>Contact List</h1>
        <ContactForm
             contactName={isEditing ? editName:contactName}
    num={isEditing ? editPhone :num}
    setName={isEditing?setEditName:setName}
    setNumber={isEditing?setEditPhone:setNumber}
    addContacts={isEditing?()=>
        editContacts(editId):addContacts
    }
    isEditing={isEditing}
    

        />
      

      </div>
      <div>
        <ContactList
          contacts={contacts}
          deleteContacts={deleteContacts}
          startEdit={startEdit}
        />
        
      </div>
     
    </>
  )
}

export default App
 