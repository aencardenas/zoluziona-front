export default function Especifications(props) {
  return (
    <>
      <div className="flex items-center bg-green-28 text-white p-[2px] lg:h-[45px] lg:text-2xl">
        <svg
          className="w-6 h-6 text-blue-70"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
            clipRule="evenodd"
          />
        </svg>

        <p className="font-semibold">{props.text}</p>
      </div>
    </>
  );
}
