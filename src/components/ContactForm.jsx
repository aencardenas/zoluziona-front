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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await formSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const resultado = await sendMail(formData);

      if (resultado.success) {
        setLoading(false);
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

      <div className="flex flex-col items-center justify-center gap-4">
        <button
          type="submit"
          className="bg-green-34 text-white font-semibold lg:text-xl w-32 h-11 lg:w-40 lg:h-14 rounded-md text-base self-center shadow-xl mt-3 hover:bg-green-28"
        >
          Enviar
        </button>

        <div className={`${(loading && Object.keys(errors).length === 0) ? '' : ''}`}>
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-34"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </form>
  );
}
