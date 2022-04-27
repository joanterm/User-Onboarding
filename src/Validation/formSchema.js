import * as yup from "yup"

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required()
        .min(3, "Username must be minimum 3 character long"),
    email: yup
        .string()
        .email("Must be a valid e-mail")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be minumum 6 characters long"),
    tos: yup
        .boolean()
        .oneOf([true], "Must accets the terms and conditions")
})

export default formSchema