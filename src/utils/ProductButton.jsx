export default function ProductButton(props){
    return(
        <button className="bg-blue-62 text-white font-semibold rounded-md py-3 px-5 text-lg lg:text-2xl">
           {props.text}
        </button>
    );

}

