import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("El apellido es requerido"),
    email: yup.string().required("El email es requerido").email("Ingrese un email valido"),
    phoneNumber: yup.string().matches(/^\d{10}$/, "Ingrese un numero valido").required("El teléfono es requerido"),
    message: yup.string().required("El mensaje es requerido"),
});