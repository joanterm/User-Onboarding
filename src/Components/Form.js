import { useState, useEffect } from "react"
import axios from "axios"
import * as yup from "yup"
import schema from "../schema"


const Form = () => {
    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        accept_agreement: false
    })

    //FOR SCHEMA VALIDATION
    const [formErrors, setFormErrors] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        accept_agreement: ""
    })

    //FOR POSTING
    const [users, setUsers] = useState([])

    //FOR DISABLING BUTTON
    const [disabledButton, setDisabledButton] = useState(true)

    //FOR BUTTON FUNCTIONALITY -> FORM VALIDATION
    useEffect(() => {
        schema.isValid(formValues)
        .then(valid => setDisabledButton(!valid))
    }, [formValues])

    const handleChange = (e) => {
        console.log(e.target.value)
        const {type, name, value, checked} = e.target
        setFormValues({
            ...formValues,
            [name]: type === "checkbox" ? checked : value
        })
        yup.reach(schema, name)
        .validate(value)
        .then(()=> setFormErrors({...formErrors, [name]: ""}))
        .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
    }
           
    //IF USING MORE THAT TEXT INPUTS (CHECKBOXES), THIS NEEDS TO BE DONE
    const handleSubmit = (e) => {    
        e.preventDefault()
        const newUser = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            //CONVERST BOOLEAN TRUE TO SOMETHING THAT WILL DISPLAY A STRING ON A SCREEN
            accept_agreement: ["accept_agreement"].filter(e => !!formValues[e])
        }
        postNewUser(newUser)
    }

    const postNewUser = (newUser) => {
        axios.post("https://reqres.in/api/users", newUser)
        .then((response) => {
            setUsers([
                ...users,
                response.data
            ])
        })
        .catch((error) => {
            return error
        }) 
    }
    return ( 
        <div>
            <h1>form</h1>
            <p>{formErrors.first_name}</p>
            <p>{formErrors.last_name}</p>
            <p>{formErrors.email}</p>
            <p>{formErrors.password}</p>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={formValues.first_name}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={formValues.last_name}
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                <label htmlFor="accept_agreement">Accepting Agreement?</label>
                <input 
                    type="checkbox"
                    name="accept_agreement"
                    checked={formValues.accept_agreement}
                    onChange={handleChange}
                />
                <input type="submit" disabled={disabledButton} value="Submit"/>
            </form>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                    <p>{user.accept_agreement}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Form;