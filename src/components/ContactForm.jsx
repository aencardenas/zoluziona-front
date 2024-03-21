export default function Form() {
  return (
    <>
      <form action="" className="mx-8 flex flex-col gap-3">
        <div className="flex flex-col">
          <legend className="font-bold text-sm">Nombre</legend>
          <input
            type="text"
            className="border-[0.5px] border-gray-600 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm">Apellido</legend>
          <input type="text" className="border border-gray-600 rounded-lg p-2" />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm">Correo</legend>
          <input type="email" className="border border-gray-600 rounded-lg p-2" />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm">Teléfono</legend>
          <input type="tel" className="border border-gray-600 rounded-lg p-2" />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm">
            Preguntas y/o comentarios
          </legend>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="border border-gray-600 rounded-lg p-2" 
          ></textarea>
        </div>

        <button type="submit" className="bg-green-34 text-white font-semibold w-32 h-11 rounded-md text-base self-center shadow-xl mt-3">Enviar</button>
      </form>
    </>
  );
}
