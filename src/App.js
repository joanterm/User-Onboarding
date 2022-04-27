import './App.css';
import Form from "./Components/Form"
import { useState } from "react"
import schema from "./Validation/formSchema"
import * as yup from "yup"
import axios from "axios"

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false
}
//for schema
const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: ""
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  //for schema
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  //for posting
  const [users, setUsers] = useState([])

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
    //for schema
    validate(name, value)
  }

  //for schema
  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users", formValues)
    .then((response) => {
      setUsers([response.data, ...users])
    })
    .catch((error) => {
      return error
    })
  }
  //just for schema
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:"" }))
    .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {users.map(user => (
        <div> 
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
