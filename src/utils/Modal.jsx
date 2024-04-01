export default function Modal({ children, open, onClose, title }) {
  return (
    <>
      <article
        className={`fixed z-50 top-0 p-5 left-0 w-full min-h-screen flex justify-center items-center bg-black bg-opacity-75 ${
          open ? "" : "hidden"
        }`}
      >
        <div className="bg-white flex flex-col justify-center items-center rounded-md overflow-x-auto">
          <div className="bg-blue-85 w-full rounded-t-md flex justify-between items-center p-1 text-white ">
            <h3 className="flex-grow text-center font-semibold text-lg" id="modalTitle">{title}</h3>
            <svg
              className="w-6 h-6 text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              onClick={onClose}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          {children}
        </div>
      </article>
    </>
  );
}
