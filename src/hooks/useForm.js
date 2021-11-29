import { useState } from "react"

export const useForm = initialValues => {
    const [value, setValue] = useState(initialValues);
    const handleChanges = (e) => {
        e.preventDefault();
        setValue({...value, [e.target.name]: e.target.value})
    }
    return [value, handleChanges];
}