export default function ProductButton(props){
    return(
        <button className="bg-blue-62 text-white font-semibold rounded-md py-3 px-5 text-lg hover:bg-blue-85">
           {props.text}
        </button>
    );

}

