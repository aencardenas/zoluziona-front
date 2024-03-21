export default function MenuMobile() {
  return (
    <>
      <div className="h-screen bg-blue-85 flex flex-col">
        <svg
          className="w-[40px] h-[40px] text-white self-end mt-3 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>

        <div className="text-white flex flex-col gap-6 text-3xl font-semibold pl-10">
          <p>Inicio</p>
          <p>Producto</p>
          <p>Características</p>
          <p>Contacto</p>
        </div>
      </div>
    </>
  );
}
