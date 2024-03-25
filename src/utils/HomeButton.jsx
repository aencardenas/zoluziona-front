
export default function HomeButton({text}) {
    return (
        <>
            <button type="button" value="Ver detalles" className="bg-blue-85 w-[151px] h-12 text-white text-base font-semibold rounded-md shadow-md lg:text-xl lg:w-[188px]">
                {text}
            </button>
        </>

    );

}