import ambientLogo from "../assets/icons/ambiental.png"
export default function CharacteristicsHome() {
    return (
        <>
            <div>
                <div>
                    <h1 className="font-semibold text-2xl text-black-101">CARACTERÍSTICAS</h1>
                </div>
                <div>
                    <ul>
                        <li className="flex items-center">
                            <img src={ambientLogo} className="w-10"/>
                            <span>Diseño liviano</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}