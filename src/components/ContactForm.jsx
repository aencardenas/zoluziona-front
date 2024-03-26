export default function Form() {
  return (
    <>
      <form action="" className="flex flex-col gap-3">
        <div className="flex flex-col">
          <legend className="font-bold text-sm lg:text-base">Nombre</legend>
          <input
            type="text"
            className="border-[0.5px] border-gray-600 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm lg:text-base">Apellido</legend>
          <input type="text" className="border border-gray-600 rounded-lg p-2" />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm lg:text-base">Correo</legend>
          <input type="email" className="border border-gray-600 rounded-lg p-2" />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm lg:text-base">Teléfono</legend>
          <input type="tel" className="border border-gray-600 rounded-lg p-2" />
        </div>
        <div className="flex flex-col">
          <legend className="font-bold text-sm lg:text-base">
            Preguntas y/o comentarios
          </legend>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="border border-gray-600 rounded-lg p-2 resize-none"  
          ></textarea>
        </div>

        <button type="submit" className="bg-green-34 text-white font-semibold lg:text-xl w-32 h-11 lg:w-40 lg:h-14 rounded-md text-base self-center shadow-xl mt-3 hover:bg-green-28">Enviar</button>
      </form>
    </>
  );
}
