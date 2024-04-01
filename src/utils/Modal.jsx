import { IoClose } from "react-icons/io5";

export default function Modal({ children, open, onClose, title }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 flex  justify-center items-center transition-colors px-5 ${
          open ? "visible bg-black/20" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-md shadow transition-all ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="bg-blue-85 flex justify-between rounded-t-md">
            <h2 className="lg:text-2xl text-white p-3">{title}</h2>
            <button onClick={onClose} className="p-1"><IoClose className="text-3xl text-white" /></button>
          </div>
          
          {children}
        </div>
      </div>
    </>
  );
}
