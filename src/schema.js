import * as yup from "yup"

const schema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("First name is required")
        .min(2, "First name must be minimum 2 characters long"),
    last_name: yup
        .string()
        .trim()
        .required("Last name is required")
        .min(2, "Last name must be minimum 2 characters long"),
    email: yup
        .string()
        .email()
        .required("E-mail address must be provided"),
    password: yup
        .string()
        .required("Password is required")
        .min(3, "Password must be minimum 3 characters long"),
    accept_agreement: yup
        .boolean()
})

export default schema