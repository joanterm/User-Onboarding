import { useState, useEffect } from "react"
import axios from "axios"

// const data = [
//     {
//         first_name: "Joanna",
//         last_name: "Terman",
//         email: "joanna@joanna.com",
//         password: "1234",
//         terms_of_service: false
//     },
//     {
//         first_name: "Mike",
//         last_name: "Smith",
//         email: "mike@mike.com",
//         password: "1234",
//         terms_of_service: false
//     }
// ]

const Form = (props) => {
    const {change, submit, errors} = props
    const {username, email, password, tos} = props.values

    const onChange = (e) => {
        const {name, value, checked, type} = e.target
        const newVal = type === "checkbox" ? checked : value
        change(name, newVal)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }
    // const [formValues, setFormValues] = useState({
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     password: "",
    //     terms_of_service: false
    // })
    // const [friends, setFriends] = useState([])
    // const [formErrors, setformErrors] = useState({
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     password: ""
    // })
    // const [disabled, setDisabled] = useState(true)

    // const handleChange = (e) => {
    //     const {type, name, value, checked} = e.target
    //     console.log(e.target.value)
    //     setFormValues({
    //         ...formValues,
    //         [name]: type === "checkbox" ? checked : value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setFriends(friends.concat({
    //         first_name: formValues.first_name,
    //         last_name: formValues.last_name,
    //         email: formValues.email,
    //         password: formValues.password
    //     }))
    //     // const newFriend = {
    //     //     first_name: formValues.first_name.trim(),
    //     //     last_name: formValues.last_name.trim(),
    //     //     email: formValues.email.trim(),
    //     //     password: formValues.password.trim()
    //     // }
    //     // postNewFriend(newFriend)
    // }

    // const getFriends = () => {
    //     axios.get("https://reqres.in/api/users")
    //     .then((response) => {
    //         console.log(response.data.data)
    //         setFriends(response.data.data)
    //     })
    //     .catch((error) => {
    //         return error
    //     })
    // }

    // useEffect(() => {
    //     getFriends()
    // }, [])



    // const postNewFriend = (newFriend) => {
    //     axios.post("https://reqres.in/api/users", newFriend)
    //     .then((response) => {
    //         console.log(response)
    //         setFriends([
    //             ...friends,
    //             response.data.data 
    //         ])
    //     })
    // }
    // const handleChange = (e) => {
    //     const {type, name, value, checked} = e.target
    //     console.log(e.target.value)
    //     const newValue = type === "checkbox" ? checked : value
    //     change(name, newValue)
    //     // setFormValues({
    //     //     ...formValues,
    //     //     [name]: type === "checkbox" ? checked : value
    //     // })
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     submit()
    // }

    return ( 
        <div>
            <h1>FORM</h1>
            <form action="" onSubmit={onSubmit}>
            {/* for schema */}
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <input 
                    type="text"
                    placeholder="First Name"
                    name="username"
                    value={username}
                    onChange={onChange}
            />
            <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
            />
            <input 
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
            />
             <input 
                    type="checkbox"
                    name="tos"
                    checked={tos}
                    onChange={onChange}
                />
                <input type="submit"value="Submot"/>
                </form>
            {/* <form action="" onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={formValues.first_name}
                    onChange={handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={formValues.last_name}
                    onChange={handleChange}
                />
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                <label htmlFor="terms_of_service">Agree to terms of service?</label>
                <input 
                    type="checkbox"
                    name="terms_of_service"
                    checked={formValues.terms_of_service}
                    onChange={handleChange}
                />
                <button>Submit Form</button>
            </form> */}

            {/* {friends.map((e) => {
                return <p>{e.first_name} {e.email} {e.last_name}</p>         
            })} */}
        </div>
        );
}
 
export default Form;
// Name (first_name, last_name)
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.