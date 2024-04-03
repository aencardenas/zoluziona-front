import { useState } from "react";
import { sendMail } from "../apis/api";
import { formSchema } from "../validations/EmailValidation";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await formSchema.validate(formData, { abortEarly: false });
      console.log("Formulario válido");
      
      const resultado = await sendMail(formData);

      if (resultado.success) {
        alert("Correo enviado con éxito");
        // Reiniciar el formulario después de enviar el correo
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } 
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });

      console.log(newErrors);

      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <legend className="font-bold text-sm lg:text-base">Nombre</legend>
        <input
          type="text"
          className="border-[0.5px] border-gray-600 rounded-lg p-2"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>
      <div className="flex flex-col">
        <legend className="font-bold text-sm lg:text-base">Apellido</legend>
        <input
          type="text"
          className="border border-gray-600 rounded-lg p-2"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs">{errors.lastName}</p>
        )}
      </div>
      <div className="flex flex-col">
        <legend className="font-bold text-sm lg:text-base">Correo</legend>
        <input
          type="text"
          className="border border-gray-600 rounded-lg p-2"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>
      <div className="flex flex-col">
        <legend className="font-bold text-sm lg:text-base">Teléfono</legend>
        <input
          type="tel"
          className="border border-gray-600 rounded-lg p-2"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
        )}
      </div>
      <div className="flex flex-col">
        <legend className="font-bold text-sm lg:text-base">
          Preguntas y/o comentarios
        </legend>
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="border border-gray-600 rounded-lg p-2 resize-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-green-34 text-white font-semibold lg:text-xl w-32 h-11 lg:w-40 lg:h-14 rounded-md text-base self-center shadow-xl mt-3 hover:bg-green-28"
      >
        Enviar
      </button>
    </form>
  );
}
