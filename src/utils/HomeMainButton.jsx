export default function Button({ text, textColor, bgHover, bgActive }) {
  return (
    <button className={`group relative inline-flex items-center overflow-hidden rounded-full border-2 border-white lg:px-12 lg:py-3 px-8 py-3 lg:text-lg font-medium text-white hover:${bgHover} hover:${textColor}`}>
            <span className={`duration-400 ease absolute left-0 top-1/2 block h-0 w-full ${bgActive} opacity-100 transition-all group-hover:top-0 group-hover:h-full`}></span>
            <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-2">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative transform duration-700 group-hover:-translate-x-3">
              {text}
            </span>
          </button>
  );
}