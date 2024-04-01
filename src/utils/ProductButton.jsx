export default function ProductButton({text, onClick}){
    return(
        <button className="bg-blue-62 text-white font-semibold rounded-md py-3 px-5 text-lg hover:bg-blue-85" onClick={onClick}>
           {text}
        </button>
    );

}

