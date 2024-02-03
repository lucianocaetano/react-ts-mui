import * as yup from "yup"

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required("El username es requerido"),
  password: yup.string().trim().required("La password es requerida").min(8, "La massword tiene que tener de 8 caracteres"),
}) 
