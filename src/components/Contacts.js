import { useState } from "react"
import { useForm } from "../hooks/useForm"

const Contacts = (props) => {
    const [contact, handleChanges] = useForm({firstName: 'jacob', lastName: 'plumb', age: 31})

    const handleSubmit = () => {
        console.log(contact);
    }

    return (
        <div>
            <input value={contact.firstName} name="firstName" onChange={handleChanges} />
            <input value={contact.lastName} name="lastName" onChange={handleChanges} />
            <input value={contact.age} name="age" onChange={handleChanges} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Contacts;